/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, Mark,
} from '@chakra-ui/react';

function TerminalDefaultPrompt({ location, text }) {
  return (
    <Text><Mark color='whiteAlpha.800'>in</Mark> <Mark color='pink.300'>~/{location}</Mark> <Mark color='whiteAlpha.800'>on</Mark> <Mark color='green.400'>zachtech.dev</Mark> <Mark fontWeight='bold' color='purple.500'>-&gt;</Mark>  {text}</Text>
  );
}

TerminalDefaultPrompt.propTypes = {
  location: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default TerminalDefaultPrompt;
