import { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { useEffect, useState } from 'react';
import { CardData, Columns } from '../types';

export const useDragAndDrop = (initialColumns?: Columns) => {
  const [columns, setColumns] = useState<Columns>(initialColumns || {});
  const [activeCard, setActiveCard] = useState<CardData | null>(null);

  useEffect(() => {
    if (initialColumns) {
      setColumns(initialColumns);
    }
  }, [initialColumns]);


  const findColumn = (cardId: string) => {
    return Object.keys(columns).find(key =>
      columns[key].cards.some(card => card.id === cardId)
    );
  };

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const activeColumnId = Object.keys(columns).find(columnId =>
      columns[columnId].cards.some(card => card.id === active.id)
    );

    if (activeColumnId) {
      const draggedCard = columns[activeColumnId].cards.find(
        card => card.id === active.id
      );
      if (draggedCard) {
        setActiveCard(draggedCard);
      }
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveCard(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id.toString();
    const overId = over.id.toString();

    const activeColumn = findColumn(activeId);
    const overColumn = Object.keys(columns).includes(overId)
      ? overId
      : findColumn(overId);

    if (!activeColumn || !overColumn) return;

    if (activeColumn === overColumn) {
      setColumns(prev => sortCardWithinColumn(prev, activeColumn, activeId, overId));
    } else {
      setColumns(prev => moveCardToNewColumn(prev, activeColumn, overColumn, activeId, overId));
    }
  };

  return { columns, activeCard, handleDragStart, handleDragEnd };
};


const moveCardToNewColumn = (
  columns: Columns,
  sourceColumnId: string,
  targetColumnId: string,
  draggedCardId: string,
  referenceCardId: string
): Columns => {
  const sourceCards = columns[sourceColumnId].cards;
  const targetCards = columns[targetColumnId].cards;

  const draggedCardIndex = sourceCards.findIndex(card => card.id === draggedCardId);
  const referenceCardIndex = targetCards.findIndex(card => card.id === referenceCardId);

  const insertAtIndex = referenceCardIndex >= 0 ? referenceCardIndex : targetCards.length;

  return {
    ...columns,
    [sourceColumnId]: {
      ...columns[sourceColumnId],
      cards: sourceCards.filter(card => card.id !== draggedCardId),
    },
    [targetColumnId]: {
      ...columns[targetColumnId],
      cards: [
        ...targetCards.slice(0, insertAtIndex),
        sourceCards[draggedCardIndex],
        ...targetCards.slice(insertAtIndex),
      ],
    },
  };
};


const sortCardWithinColumn = (
  columns: Columns,
  columnId: string,
  draggedCardId: string,
  referenceCardId: string
): Columns => {
  const cards = columns[columnId].cards;
  const fromIndex = cards.findIndex(card => card.id === draggedCardId);
  const toIndex = cards.findIndex(card => card.id === referenceCardId);

  return {
    ...columns,
    [columnId]: {
      ...columns[columnId],
      cards: arrayMove(cards, fromIndex, toIndex),
    },
  };
};