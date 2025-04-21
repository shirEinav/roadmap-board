export const TAG_COLORS = ["gray", "red", "green", "blue", "purple"] as const;
export type TagColor = typeof TAG_COLORS[number];

export const ICON_BUBBLE_COLORS = ["gray", "green", "blue", "purple"] as const;
export type IconBubbleColor = typeof ICON_BUBBLE_COLORS[number];

export interface TagData {
  label: string;
  color?: TagColor;
}

export interface SubtaskData {
  id: string;
  label: string;
  color: IconBubbleColor;
}

export interface CardData {
  id: string;
  title: string;
  tag: TagData;
  subtasks?: SubtaskData[];
}

export interface ColumnData {
  id: string;
  title: string;
  cards: CardData[];
}

export type Columns = Record<string, CardData[]>;
