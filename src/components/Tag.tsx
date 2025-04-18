import { Tag as ChakraTag } from "@chakra-ui/react";
import { TagColor, TagProps } from "./types";

const tagColors: Record<TagColor, string> = {
  gray: "gray.100",
  red: "red.100",
  green: "green.100",
  blue: "blue.100",
  purple: "purple.100",
}

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