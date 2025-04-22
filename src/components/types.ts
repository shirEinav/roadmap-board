export const TAG_COLORS = ["gray", "red", "green", "blue", "purple"] as const;
export type TagColor = typeof TAG_COLORS[number];

export const ICON_BUBBLE_COLORS = ["gray", "green", "blue", "purple"] as const;
export type IconBubbleColor = typeof ICON_BUBBLE_COLORS[number];