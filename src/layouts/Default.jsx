import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '@chakra-ui/react';
import TerminalBar from '../components/TerminalBar';
import TerminalTabBar from '../components/TerminalTabBar';
import TerminalWindow from '../components/TerminalWindow';

function Default({ children }) {
  return (
    <Box w='100vw' h='100vh' bgGradient='linear(to-r, green.200, pink.500)'>
      <Flex>
        <Box boxShadow='base' m='6' rounded='md' bg='#282C34' h='calc(100vh - 50px)' w='100vw'>
          <TerminalBar />
          <TerminalTabBar />
          <TerminalWindow>
            {children}
          </TerminalWindow>
        </Box>
      </Flex>
    </Box>
  );
}

Default.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Default;
