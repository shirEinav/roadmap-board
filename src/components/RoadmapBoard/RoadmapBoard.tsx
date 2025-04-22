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
import { useRoadmapColumns } from '../../hooks/useRoadmapColumns';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';

import { RoadmapBoardSkeleton } from './RoadmapBoard.skeleton';
export const RoadmapBoard = () => {
  const { data: initialColumns, isLoading } = useRoadmapColumns();
  const {
    columns,
    handleDragEnd,
    handleDragStart,
    activeCard
  } = useDragAndDrop(initialColumns);


  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  if (isLoading) return <RoadmapBoardSkeleton />;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Flex gap={3} p={6} justify="center">
        {Object.entries(columns).map(([columnId, { title, cards }]) => (
          <SortableContext
            key={columnId}
            items={cards.map(card => card.id)}
            strategy={verticalListSortingStrategy}
          >
            <Column id={columnId} title={title}>
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
