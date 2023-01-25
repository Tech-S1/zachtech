import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, Show,
} from '@chakra-ui/react';
import { PromptBody, PromptInput } from './TerminalDefaultPrompt';

function TerminalDefaultPrompt({ location, text }) {
  return (
    <>
      <Show above='750px'>
        <Text>
          <PromptBody location={location} />
          {' '}
          <PromptInput>{text}</PromptInput>
        </Text>
      </Show>
      <Show below='750px'>
        <Text><PromptBody location={location} /></Text>
        <Text><PromptInput>{text}</PromptInput></Text>
      </Show>
    </>
  );
}

TerminalDefaultPrompt.propTypes = {
  location: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default TerminalDefaultPrompt;
