import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Show,
  Text,
} from '@chakra-ui/react';
import { PromptBody, PromptInput } from './TerminalDefaultPrompt';

function TerminalDefaultPromptInput({
  location, inputValue, onInputChange, onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <Show above='750px'>
        <Text>
          <PromptBody location={location} />
          {' '}
          <PromptInput><Input value={inputValue} onChange={onInputChange} autoFocus variant='unstyled' w='calc(100vw - 430px) ' /></PromptInput>
        </Text>
      </Show>
      <Show below='750px'>
        <Text><PromptBody location={location} /></Text>
        <Text><PromptInput><Input value={inputValue} onChange={onInputChange} autoFocus variant='unstyled' w='calc(100vw - 110px)' /></PromptInput></Text>
      </Show>
    </form>
  );
}

TerminalDefaultPromptInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
export default TerminalDefaultPromptInput;
