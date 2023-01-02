import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import Home from './Home';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Home />
    </ChakraProvider>
  );
}

export default App;
