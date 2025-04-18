import { Box } from "@chakra-ui/react";
import { SubtaskItem } from './SubtaskItem';
import { SubtaskItemProps } from "./types";

interface SubtaskListProps {
  items: SubtaskItemProps[];
}

export const SubtaskList = ({
  items,
}: SubtaskListProps) => {
  return (
    <Box
      borderColor="gray.200"
      borderWidth={1}
      borderRadius='sm'
      divideY='1px'
      divideColor='gray.200'
    >
      {items.map((item) => (
        <SubtaskItem key={item.label} {...item} />
      ))}
    </Box>
  );
};
