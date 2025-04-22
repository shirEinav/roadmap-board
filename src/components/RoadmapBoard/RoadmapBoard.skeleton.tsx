import { BoardLayout } from '../BoardLayout/BoardLayout';
import { ColumnSkeleton } from '../Column/Column.skeleton';

export const SKELETON_TEST_ID = "roadmap-skeleton";
const COLUMN_COUNT = 3;

export const RoadmapBoardSkeleton = () => {
  return (
    <div data-testid={SKELETON_TEST_ID}>
      <BoardLayout>
        {Array.from({ length: COLUMN_COUNT }).map((_, index) => (
          <ColumnSkeleton key={index} />
        ))}
      </BoardLayout>
    </div>
  );
}