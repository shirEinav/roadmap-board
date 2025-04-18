import { describe, it, expect } from "vitest";
import { render, screen } from "../../__tests__/test-utils";
import { SubtaskItemProps } from "../types";
import { Card } from "./Card";

describe("<Card />", () => {
  it("renders the card title", () => {
    render(
      <Card
        title="Project Alpha"
        tag={{ label: "Urgent", color: "red" }}
      />
    );

    expect(screen.getByText("Project Alpha")).toBeInTheDocument();
  });

  it("renders the tag label", () => {
    render(
      <Card
        title="Project Beta"
        tag={{ label: "Feature", color: "green" }}
      />
    );

    expect(screen.getByText("Feature")).toBeInTheDocument();
  });

  it("renders subtasks if provided", () => {
    const subtasks: SubtaskItemProps[] = [
      { label: "Subtask 1", color: "green" },
      { label: "Subtask 2", color: "blue" },
    ];

    render(
      <Card
        title="With Subtasks"
        tag={{ label: "Epic", color: "purple" }}
        subtasks={subtasks}
      />
    );

    expect(screen.getByText("Subtask 1")).toBeInTheDocument();
    expect(screen.getByText("Subtask 2")).toBeInTheDocument();
  });

  it("does not render subtasks if not provided", () => {
    render(
      <Card
        title="Without Subtasks"
        tag={{ label: "Chore", color: "gray" }}
      />
    );

    expect(screen.queryByText("Subtask 1")).not.toBeInTheDocument();
  });
});
