import { describe, it, expect } from "vitest";
import { render, screen } from "../../__tests__/test-utils";
import { Column } from "./Column";

describe("<Column />", () => {
  it("renders the column title", () => {
    render(
      <Column title="Now">
        <div>Card content</div>
      </Column>
    );

    expect(screen.getByText("Now")).toBeInTheDocument();
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });
});
