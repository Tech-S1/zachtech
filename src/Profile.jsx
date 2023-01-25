/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {
  Link,
  Text,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faJava, faJs, faDocker, faAws, faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Default from './layouts/Default';
import '@fontsource/fira-code';
import TerminalTitle from './components/TerminalTitle';
import TerminalDefaultPrompt from './components/TerminalDefaultPrompt';

function Profile() {
  return (
    <Default>
      <TerminalTitle />
      <TerminalDefaultPrompt location='Profile' text="profile" />
      <Text> </Text>
      <Text>👨🏻‍💻 Zach Sproston:</Text>
      <Text>   <Link href='https://github.com/Tech-S1' isExternal><FontAwesomeIcon icon={faGithub} size="lg" width='20px' /> Github <ExternalLinkIcon paddingBottom='3px' /></Link></Text>
      <Text> </Text>
      <Text>💻 Technologies:</Text>
      <Text>   <FontAwesomeIcon icon={faReact} size="lg" width='20px' /> React</Text>
      <Text>   <FontAwesomeIcon icon={faJava} size="lg" width='20px' /> Java</Text>
      <Text>   <FontAwesomeIcon icon={faJs} size="lg" width='20px' /> JavaScript</Text>
      <Text>   <FontAwesomeIcon icon={faDocker} size="lg" width='20px' /> Docker/Kubernetes</Text>
      <Text>   <FontAwesomeIcon icon={faAws} size="lg" width='20px' /> AWS</Text>
    </Default>
  );
}

export default Profile;
