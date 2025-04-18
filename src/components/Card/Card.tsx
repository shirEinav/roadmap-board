import { Box, Text, HStack, Stack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { IconBubble } from "../IconBubble/IconBubble";
import { Tag, } from "../Tag/Tag";
import { SubtaskList } from "../SubtaskList/SubtaskList";
import { SubtaskItemProps, TagProps } from "../types";

interface CardProps {
  title: string;
  tag: TagProps;
  subtasks?: SubtaskItemProps[];
}

export const Card = ({ title, tag, subtasks }: CardProps) => {
  return (
    <Box
      bg="white"
      p={3}
      borderRadius="md"
      borderWidth={1}
      cursor="grab"
      _hover={{ bg: "gray.50" }}
    >
      <Stack gap={3}>
        <HStack gap={2}>
          <IconBubble
            icon={<FaRocket size={8} color="white" />}
          />
          <Text textStyle="sm" fontWeight="medium">
            {title}
          </Text>
        </HStack>
        <Tag label={tag.label} color={tag.color ?? "gray"} />

        {subtasks && (
          <SubtaskList items={subtasks} />
        )}
      </Stack>
    </Box>
  );
};
