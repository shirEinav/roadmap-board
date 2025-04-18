import { Box, Stack, Text } from "@chakra-ui/react"

interface ColumnProps {
  title: string;
  children: React.ReactNode;
}

export const Column = ({ title, children }: ColumnProps) => {
  return (
    <Stack gap={3} width="450px">
      <Box bg="gray.100" p={3} borderRadius="md">
        <Text textStyle='sm' fontWeight='medium' >{title}</Text>
      </Box>

      <Box bg="gray.100" p={3} borderRadius="md">
        <Stack gap={2}>
          {children}
        </Stack>
      </Box>
    </Stack>
  )
}