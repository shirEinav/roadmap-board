import { IconBubbleColor, TagColor } from './components/types';

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

export type Columns = Record<string, { title: string; cards: CardData[] }>;
