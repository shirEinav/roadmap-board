import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

const render = (ui: React.ReactElement) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ChakraProvider value={defaultSystem}>{children}</ChakraProvider>
  );
  return rtlRender(ui, { wrapper: Wrapper });
}

export {
  screen,
  fireEvent,
  waitFor,
  act,
  within,
  waitForElementToBeRemoved,
} from "@testing-library/react";
export { render };