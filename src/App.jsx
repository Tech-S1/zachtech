import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import theme from './theme';
import Home from './pages/Home';

// TODO: Update to make more dynamic with page tabs and header
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
