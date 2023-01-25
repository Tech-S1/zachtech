import React from 'react';
import { Text } from '@chakra-ui/react';
import Default from '../layouts/Default';
import '@fontsource/fira-code';
import TerminalTitle from '../components/TerminalTitle';
import TerminalDefaultPromptText from '../components/TerminalDefaultPromptText';
import ProcessCompletedCommand from '../components/commandoutput/ProcessCompletedCommand';
import ProfileCommand from '../components/commandoutput/ProfileCommand';

function Profile() {
  return (
    <Default>
      <TerminalTitle />
      <TerminalDefaultPromptText location='Home' text="profile" />
      <ProfileCommand />
      <Text> </Text>
      <ProcessCompletedCommand />
    </Default>
  );
}

export default Profile;
