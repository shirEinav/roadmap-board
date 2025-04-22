import { describe, it, expect } from "vitest";
import { render, screen } from "../../__tests__/test-utils";
import { SubtaskList } from "./SubtaskList";
import { SubtaskItemProps } from '../SubtaskItem/SubtaskItem';

describe("<SubtaskList />", () => {
  it("renders all subtask items", () => {
    const items: SubtaskItemProps[] = [
      { id: "1", label: "Write tests", color: "green" },
      { id: "2", label: "Fix layout bug", color: "blue" },
      { id: "3", label: "Deploy to staging", color: "purple" },
    ];

    render(<SubtaskList items={items} />);

    items.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
