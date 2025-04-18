import { Flex, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { IconBubble } from '../IconBubble/IconBubble';
import { SubtaskItemProps } from "../types";

export const SubtaskItem = ({
  label,
  color,
}: SubtaskItemProps) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      borderColor="gray.100"
      px={3}
      py={2}
    >
      <Flex align="center" gap={2}>
        <IconBubble icon={<FaStar size={10} color="white" />} color={color} />
        <Text fontSize="sm" fontWeight="medium" color="gray.800">
          {label}
        </Text>
      </Flex>
    </Flex>
  );
};
