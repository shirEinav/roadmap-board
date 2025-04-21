
import { describe, it, expect } from "vitest";
import { FaStar } from "react-icons/fa";
import { render, screen } from "../../__tests__/test-utils";
import { IconBubble } from "./IconBubble";
import { iconBubbleColors } from './IconBubble.constants';

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
