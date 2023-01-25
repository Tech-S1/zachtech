import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import theme from './theme';
import Home from './pages/Home';
import Profile from './pages/Profile';

// TODO: Update to make more dynamic with page tabs and header
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
