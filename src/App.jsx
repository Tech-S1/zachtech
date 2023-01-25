import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import theme from './theme';
import Home from './Home';
import Profile from './Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/profile',
    element: <Profile />,
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
