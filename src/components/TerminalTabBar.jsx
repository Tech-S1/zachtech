import React from 'react';
import {
  Box,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function TerminalTabBar() {
  return (
    <Flex bg='#21252B' minWidth='max-content' alignItems='center' gap='2' p='1'>
      {/* TODO: Update to dynamically build list */}
      <Link to='/'>
        <Box color='white' px='2'>
          Home
        </Box>
      </Link>
    </Flex>
  );
}

export default TerminalTabBar;
