import { describe, it, expect } from "vitest";
import { render, screen } from "../../__tests__/test-utils";
import { SubtaskItem } from "./SubtaskItem";

describe("<SubtaskItem />", () => {
  it("renders the label text", () => {
    render(<SubtaskItem label="Fix bug" color="green" />);

    expect(screen.getByText("Fix bug")).toBeInTheDocument();
  });
});
