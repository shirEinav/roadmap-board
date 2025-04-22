import { Box, Skeleton, Stack } from '@chakra-ui/react';

export const ColumnSkeleton = () => {
  return <Box
    width="450px"
  >
    <Stack gap={3}>
      <Skeleton height="44px" />
      <Skeleton height="calc(100vh - 200px)" />
    </Stack>
  </Box>;
}