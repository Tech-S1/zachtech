import React from 'react';
import {
  SimpleGrid, Box, Circle, Flex, Spacer, Text,
} from '@chakra-ui/react';

const CLOSE_COLOR = '#FE5852';
const MINIMISE_COLOR = '#FEB538';
const MAXIMISE_COLOR = '#27BF3E';
const BUTTON_SIZE = 4;

function TerminalBar() {
  return (
    <Box bg='#282C34' minWidth='calc(100vw - 50px)' borderTopRadius="md" alignItems='center'>
      <SimpleGrid columns={3}>
        <Box padding='4'>
          <Flex gap='2'>
            <Circle size={BUTTON_SIZE} bg={CLOSE_COLOR} />
            <Circle size={BUTTON_SIZE} bg={MINIMISE_COLOR} />
            <Circle size={BUTTON_SIZE} bg={MAXIMISE_COLOR} />
          </Flex>
        </Box>
        <Box padding='3'>
          <Flex gap='2'>
            <Spacer />
            <Text color='white'>Home</Text>
            <Spacer />
          </Flex>
        </Box>
        <Box />
      </SimpleGrid>
    </Box>
  );
}

export default TerminalBar;
