import { Box } from "@chakra-ui/react"
import { IconBubbleColor } from "../types";

interface IconBubbleProps {
  icon: React.ReactNode;
  color?: IconBubbleColor;
}

export const iconBubbleColors: Record<IconBubbleColor, string> = {
  gray: "gray.400",
  green: "green.400",
  blue: "blue.400",
  purple: "purple.400",
}

export const IconBubble = ({ icon, color = "gray" }: IconBubbleProps) => {
  return (
    <Box
      bg={iconBubbleColors[color]}
      w="16px"
      h="16px"
      borderRadius="sm"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {icon}
    </Box>
  )
}
