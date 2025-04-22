import { BoardLayout } from '../BoardLayout/BoardLayout';
import { ColumnSkeleton } from '../Column/Column.skeleton';

const COLUMN_COUNT = 3;

export const RoadmapBoardSkeleton = () => {
  return (
    <BoardLayout>
      {Array.from({ length: COLUMN_COUNT }).map((_, index) => (
        <ColumnSkeleton key={index} />
      ))}
    </BoardLayout>
  );
}