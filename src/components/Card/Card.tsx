import { Box, Text, HStack, Stack } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";
import { IconBubble } from "../IconBubble/IconBubble";
import { Tag } from "../Tag/Tag";
import { SubtaskList } from "../SubtaskList/SubtaskList";
import { CardData } from "../../types";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export type CardProps = CardData;

export const Card = ({ id, title, tag, subtasks }: CardProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
  };

  return (
    <Box
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
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
