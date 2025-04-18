
import { describe, it, expect } from "vitest";
import { render, screen } from "../../__tests__/test-utils";
import { IconBubble, iconBubbleColors } from "./IconBubble";
import { FaStar } from "react-icons/fa";

describe("<IconBubble />", () => {
  it("renders the icon", () => {
    render(<IconBubble icon={<FaStar data-testid="icon" />} color="green" />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("maps colors correctly", () => {
    expect(iconBubbleColors["blue"]).toBe("blue.400");
    expect(iconBubbleColors["gray"]).toBe("gray.400");
  });
});
