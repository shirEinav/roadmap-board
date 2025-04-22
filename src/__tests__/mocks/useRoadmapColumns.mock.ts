import { vi } from 'vitest';
import { UseQueryResult } from '@tanstack/react-query';
import { Columns } from '../../types';
import * as useRoadmapColumnsModule from '../../hooks/useRoadmapColumns';

interface MockUseRoadmapColumnsOverrides {
  data?: Columns;
  isLoading?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
  error?: Error;
}

export const mockColumns: Columns = {
  1: {
    title: "Now",
    cards: [
      {
        id: '1',
        title: "Design homepage",
        tag: { label: "UI", color: "blue" },
        subtasks: [],
      },
    ],
  },
};

export const getMockUseRoadmapColumns = (
  overrides: MockUseRoadmapColumnsOverrides = {}
): UseQueryResult<Columns, Error> => ({
  data: mockColumns,
  isLoading: false,
  isError: false,
  isSuccess: true,
  error: null,
  refetch: vi.fn(),
  fetchStatus: 'idle',
  status: 'success',
  isFetched: true,
  isRefetching: false,
  isLoadingError: false,
  isPaused: false,
  isPlaceholderData: false,
  isFetching: false,
  isStale: false,
  isPending: false,
  isRefetchError: false,
  dataUpdatedAt: 0,
  errorUpdatedAt: 0,
  failureCount: 0,
  failureReason: null,
  remove: vi.fn(),
  errorUpdateCount: 0,
  isFetchedAfterMount: true,
  isInitialLoading: false,
  promise: Promise.resolve(mockColumns),
  ...overrides
} as UseQueryResult<Columns, Error>);


export const mockUseRoadmapColumns = (
  overrides?: MockUseRoadmapColumnsOverrides
) => {
  const mock = getMockUseRoadmapColumns(overrides);
  vi.spyOn(useRoadmapColumnsModule, 'useRoadmapColumns').mockReturnValue(mock);
  return mock;
};