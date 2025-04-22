import { DragOverlay } from '@dnd-kit/core';
import { Card } from '../Card/Card';
import { CardData } from '../../types';

interface DraggingOverlayProps {
  draggedItem: CardData | null;
}

export const DraggingOverlay = ({ draggedItem }: DraggingOverlayProps) => {
  return (
    <DragOverlay dropAnimation={null}>
      {draggedItem ? (
        <Card
          {...draggedItem}
        />
      ) : null}
    </DragOverlay>
  );
}; 