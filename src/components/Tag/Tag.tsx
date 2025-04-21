import { Tag as ChakraTag } from "@chakra-ui/react";
import { TagData } from "../types";
import { tagColors } from "./Tag.constants";

export type TagProps = TagData;

export const Tag = ({ label, color = "gray" }: TagProps) => {
  return (
    <ChakraTag.Root
      key={color}
      width="fit-content"
      variant='subtle'
      bg={tagColors[color]}
      rounded="full"
    >
      <ChakraTag.Label>{label}</ChakraTag.Label>
    </ChakraTag.Root>
  )
}