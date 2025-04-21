import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { RoadmapBoard } from './components/RoadmapBoard/RoadmapBoard';

export const App = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <RoadmapBoard />
    </ChakraProvider>
  );
};
