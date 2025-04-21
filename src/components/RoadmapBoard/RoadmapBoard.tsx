import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Flex } from '@chakra-ui/react';
import { Column } from '../Column/Column';
import { Card } from '../Card/Card';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

export const RoadmapBoard = () => {
  const { columns, handleDragEnd, handleDragStart, activeCard } = useDragAndDrop({
    Now: [
      {
        id: "card-1",
        title: "Card 1",
        tag: { label: "RED", color: "red" },
        subtasks: [
          {
            id: "subtask-1",
            label: "Subtask 1",
            color: "gray",
          },
          {
            id: "subtask-2",
            label: "Subtask 2",
            color: "green",
          },
        ],
      }
    ],
    Next: [],
    Later: [
      {
        id: "card-2",
        title: "Card 2",
        tag: { label: "blue" },
        subtasks: [],
      },
    ]
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Flex gap={3} p={6} justify="center">
        {Object.entries(columns).map(([columnId, cards]) => (
          <SortableContext
            key={columnId}
            items={cards.map(card => card.id)}
            strategy={verticalListSortingStrategy}
          >
            <Column id={columnId} title={columnId}>
              {cards.map(card => (
                <Card key={card.id} {...card} />
              ))}
            </Column>
          </SortableContext>
        ))}
      </Flex>
      <DragOverlay>
        {activeCard ? <Card {...activeCard} /> : null}
      </DragOverlay>
    </DndContext >
  );
};
