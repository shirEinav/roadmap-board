import { Box, Stack, Text } from "@chakra-ui/react"
import { useDroppable } from '@dnd-kit/core';

interface ColumnProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export const Column = ({ id, title, children }: ColumnProps) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <Box
      ref={setNodeRef}
      width="450px"
      transition="background-color 0.2s ease"
    >
      <Stack gap={3}>
        <Box bg="gray.100" p={3} borderRadius="md">
          <Text textStyle='sm' fontWeight='medium'>{title}</Text>
        </Box>

        <Box
          bg={isOver ? "gray.200" : "gray.100"}
          p={3}
          borderRadius="md"
          minHeight="calc(100vh - 200px)"
          transition="background-color 0.2s ease"
        >
          <Stack gap={2}>
            {children}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};