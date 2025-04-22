import { Flex } from "@chakra-ui/react";

interface BoardLayoutProps {
  children: React.ReactNode;
}

export const BoardLayout = ({ children }: BoardLayoutProps) => (
  <Flex gap={3} p={6} justify="center">
    {children}
  </Flex>
);