import React from 'react';
import PropTypes from 'prop-types';
import {
  Mark,
} from '@chakra-ui/react';

function PromptBody({ location }) {
  return (
    <>
      <Mark color='whiteAlpha.800'>in</Mark>
      {' '}
      <Mark color='pink.300'>
        ~/
        {location}
      </Mark>
      {' '}
      <Mark color='whiteAlpha.800'>on</Mark>
      {' '}
      <Mark color='green.400'>zachtech.dev</Mark>
    </>
  );
}
PromptBody.propTypes = {
  location: PropTypes.string.isRequired,
};

function PromptPointer() {
  return <Mark fontWeight='bold' color='purple.500'>-&gt;</Mark>;
}

function PromptInput({ children }) {
  return (
    <>
      <PromptPointer />
      {' '}
      {children}
    </>
  );
}
PromptInput.propTypes = {
  children: PropTypes.node.isRequired,
};

export { PromptBody, PromptPointer, PromptInput };
