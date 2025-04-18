import { describe, it, expect } from "vitest";
import { render, screen } from "../../__tests__/test-utils";
import { SubtaskList } from "./SubtaskList";
import { SubtaskItemProps } from "../types";
describe("<SubtaskList />", () => {
  it("renders all subtask items", () => {
    const items: SubtaskItemProps[] = [
      { label: "Write tests", color: "green" },
      { label: "Fix layout bug", color: "blue" },
      { label: "Deploy to staging", color: "purple" },
    ];

    render(<SubtaskList items={items} />);

    items.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
