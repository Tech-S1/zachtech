import React, { useRef, useState, useEffect } from 'react';
import {
  Text,
} from '@chakra-ui/react';
import Default from '../layouts/Default';
import '@fontsource/fira-code';
import TerminalTitle from '../components/TerminalTitle';
import TerminalDefaultPromptText from '../components/TerminalDefaultPromptText';
import TerminalDefaultPromptInput from '../components/TerminalDefaultPromptInput';
import HelpCommand from '../components/commandoutput/HelpCommand';
import ProfileCommand from '../components/commandoutput/ProfileCommand';

const initStack = () => {
  const tmpStack = [];
  tmpStack.push(<TerminalDefaultPromptText location='Home' text="help" />);
  tmpStack.push(<HelpCommand />);
  tmpStack.push(<Text> </Text>);
  return tmpStack;
};

function Home() {
  const [terminalInput, setTerminalInput] = useState('');
  const [inputStack, setInputStack] = useState([...initStack()]);
  const pageBottomRef = useRef(null);

  useEffect(() => {
    pageBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [inputStack]);

  const clearInput = () => {
    setInputStack([]);
    setTerminalInput('');
  };

  const onInputSubmit = (e) => {
    e.preventDefault();
    if (terminalInput === 'clear') {
      clearInput();
      return;
    }

    const tmpStack = [];
    tmpStack.push(<TerminalDefaultPromptText location='Home' text={terminalInput} />);
    switch (terminalInput) {
      case 'help':
        tmpStack.push(<HelpCommand />);
        break;
      case 'profile':
        tmpStack.push(<ProfileCommand />);
        break;
      default:
        tmpStack.push(<Text>Unknown Command. </Text>);
        tmpStack.push(<Text>Type help for all commands. </Text>);
    }
    tmpStack.push(<Text> </Text>);
    setInputStack([...inputStack, ...tmpStack]);
    setTerminalInput('');
  };

  return (
    <Default>
      <TerminalTitle />
      {inputStack}
      <TerminalDefaultPromptInput onSubmit={(e) => onInputSubmit(e)} onInputChange={(e) => setTerminalInput(e.target.value)} inputValue={terminalInput} location='Home' />
      <div ref={pageBottomRef} style={{ height: '30px' }} />
    </Default>
  );
}

export default Home;
