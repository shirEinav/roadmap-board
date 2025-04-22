import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RoadmapBoard } from './components/RoadmapBoard/RoadmapBoard';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={defaultSystem}>
        <RoadmapBoard />
      </ChakraProvider>
    </QueryClientProvider>
  );
};
