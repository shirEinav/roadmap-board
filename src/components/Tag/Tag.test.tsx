import { describe, it, expect } from "vitest";
import { render, screen } from "../../__tests__/test-utils";
import { Tag, tagColors } from "./Tag";

describe("<Tag />", () => {
  it("renders the label", () => {
    render(<Tag label="Urgent" color="red" />);
    expect(screen.getByText("Urgent")).toBeInTheDocument();
  });

  it("renders the default color when none is provided", () => {
    render(<Tag label="Default Color" />);
    expect(screen.getByText("Default Color")).toBeInTheDocument();
  });

  it("maps tag colors correctly", () => {
    expect(tagColors["red"]).toBe("red.100");
    expect(tagColors["gray"]).toBe("gray.100");
  });
});