import { describe, it, expect } from "vitest";
import { render, screen } from "../../__tests__/test-utils";
import { mockColumns, mockUseRoadmapColumns } from '../../__tests__/mocks/useRoadmapColumns.mock';
import { RoadmapBoard } from "./RoadmapBoard";
import { SKELETON_TEST_ID } from "./RoadmapBoard.skeleton";

describe("<RoadmapBoard />", () => {
  it("renders loading skeleton when data is loading", () => {
    mockUseRoadmapColumns({
      data: undefined,
      isLoading: true,
    });

    render(<RoadmapBoard />);

    expect(screen.getByTestId(SKELETON_TEST_ID)).toBeInTheDocument();
  });

  it("renders columns and cards when data is loaded", () => {
    mockUseRoadmapColumns();

    render(<RoadmapBoard />);

    expect(screen.getByText(mockColumns[1].title)).toBeInTheDocument();
    expect(screen.getByText(mockColumns[1].cards[0].title)).toBeInTheDocument();
  });
});
