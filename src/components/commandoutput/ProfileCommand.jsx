import React from 'react';
import {
  Link,
  Text,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact, faJava, faJs, faDocker, faAws, faGithub, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function ProfileCommand() {
  return (
    <>
      <Text>👨🏻‍💻 Zach Sproston - Software Engineer</Text>
      <Text> </Text>
      <Text>🔗 Links:</Text>
      <Text>
        <Link href='https://github.com/Tech-S1' isExternal>
          {'   '}
          <FontAwesomeIcon icon={faGithub} size="lg" width='20px' />
          {' '}
          Github
          <ExternalLinkIcon paddingBottom='3px' />
        </Link>
      </Text>
      <Text>
        <Link href='https://www.linkedin.com/in/zach-sproston-1244a3136/?originalSubdomain=uk' isExternal>
          {'   '}
          <FontAwesomeIcon icon={faLinkedin} size="lg" width='20px' />
          {' '}
          LinkedIn
          <ExternalLinkIcon paddingBottom='3px' />
        </Link>
      </Text>
      <Text> </Text>
      <Text>💻 Technologies:</Text>
      <Text>
        {'   '}
        <FontAwesomeIcon icon={faJava} size="lg" width='20px' />
        {' '}
        Java
      </Text>
      <Text>
        {'   '}
        <FontAwesomeIcon icon={faJs} size="lg" width='20px' />
        {' '}
        JavaScript
      </Text>
      <Text>
        {'   '}
        <FontAwesomeIcon icon={faDocker} size="lg" width='20px' />
        {' '}
        Docker/Kubernetes
      </Text>
      <Text>
        {'   '}
        <FontAwesomeIcon icon={faAws} size="lg" width='20px' />
        {' '}
        AWS
      </Text>
      <Text>
        {'   '}
        <FontAwesomeIcon icon={faReact} size="lg" width='20px' />
        {' '}
        React
      </Text>
    </>
  );
}

export default ProfileCommand;
