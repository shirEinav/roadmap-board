import { ColumnData } from "../types";

export const fetchRoadmapColumns = async (): Promise<ColumnData[]> => {
  const res = await fetch("https://68079f71e81df7060ebb0a68.mockapi.io/roadmap/columns");
  if (!res.ok) throw new Error("Failed to fetch roadmap");
  return res.json();
};
