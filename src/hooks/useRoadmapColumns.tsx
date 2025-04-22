import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchRoadmapColumns } from '../api/roadmap';
import { Columns } from '../types';

export const useRoadmapColumns = (): UseQueryResult<Columns> => {
  return useQuery({
    queryKey: ['roadmapColumns'],
    queryFn: async (): Promise<Columns> => {
      const raw = await fetchRoadmapColumns();

      const columns = raw.reduce((acc, column) => {
        acc[column.id] = {
          title: column.title,
          cards: column.cards,
        };
        return acc;
      }, {} as Columns);

      return columns;
    },
  });
};