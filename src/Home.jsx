/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {
  Text,
} from '@chakra-ui/react';
import Default from './layouts/Default';
import '@fontsource/fira-code';
import TerminalTitle from './components/TerminalTitle';
import TerminalDefaultPrompt from './components/TerminalDefaultPrompt';

function Home() {
  return (
    <Default>
      <TerminalTitle />
      <TerminalDefaultPrompt location='Home' text="help" />
      <Text> </Text>
      <Text>Basic Commands:</Text>
      <Text>  profile - Display Profile Information</Text>
      {/* <Text> </Text>
      <Flex>
        <Text width='350px'><Mark color='whiteAlpha.800'>in</Mark> <Mark color='pi
        nk.300'>~/Home</Mark> <Mark color='whiteAlpha.800'>on</Mark> <Mark color='
        green.400'>zachtech.dev</Mark> <Mark fontWeight='bold' color='purple.500'>-
        &gt;</Mark> </Text>
        <Input autoFocus variant='unstyled' w='full' />
      </Flex>
      <Text> </Text>
      <Text>About</Text>
      <Text>  Zach Sproston</Text>
      <Text>  Software Engineer</Text>
      <Text> </Text> */}
    </Default>
  );
}

export default Home;
