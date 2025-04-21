import { Box } from "@chakra-ui/react"
import { IconBubbleColor } from "../types";
import { iconBubbleColors } from './IconBubble.constants';

interface IconBubbleProps {
  icon: React.ReactNode;
  color?: IconBubbleColor;
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
