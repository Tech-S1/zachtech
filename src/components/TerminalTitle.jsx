import React from 'react';
import {
  Text, Show,
} from '@chakra-ui/react';

function TerminalTitle() {
  return (
    <>
      <Show above='750px'>
        <Text color='pink.300' fontWeight='bold'> _______                _         _____              _     </Text>
        <Text color='pink.300' fontWeight='bold'>(_____  )              ( )       (_   _)            ( )    </Text>
        <Text color='pink.300' fontWeight='bold'>     /&#39;/&#39;   _ _    ___ | |__       | |   __     ___ | |__  </Text>
        <Text color='pink.300' fontWeight='bold'>   /&#39;/&#39;   /&#39;_` ) /&#39;___)|  _ `\     | | /&#39;__`\ /&#39;___)|  _ `\</Text>
        <Text color='pink.300' fontWeight='bold'> /&#39;/&#39;___ ( (_| |( (___ | | | |     | |(  ___/( (___ | | | |</Text>
        <Text color='pink.300' fontWeight='bold'>(_______)`\__,_)`\____)(_) (_)     (_)`\____)`\____)(_) (_)</Text>
      </Show>
      <Show below='750px'>
        <Text color='pink.300' fontWeight='bold'>___            ___         </Text>
        <Text color='pink.300' fontWeight='bold'> _/ _  _ |_     |  _  _ |_ </Text>
        <Text color='pink.300' fontWeight='bold'>/__(_|(_ | |    | (/_(_ | |</Text>
      </Show>
      <Text> </Text>
    </>
  );
}

export default TerminalTitle;
