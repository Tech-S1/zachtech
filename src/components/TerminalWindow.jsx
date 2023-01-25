import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, Flex,
} from '@chakra-ui/react';

function TerminalWindow({ children }) {
  return (
    <Flex minWidth='max-content' gap='2' p='1'>
      <Box color='white' px='2' w='100%' fontFamily='Fira Code' style={{ whiteSpace: 'pre-wrap' }} overflowY="auto" maxHeight="calc(100vh - 150px)">
        {children}
      </Box>
    </Flex>
  );
}

TerminalWindow.propTypes = {
  children: PropTypes.node.isRequired,
};
export default TerminalWindow;
