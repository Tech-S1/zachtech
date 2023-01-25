import React from 'react';
import {
  Text, Show,
} from '@chakra-ui/react';

function TerminalTitle() {
  return (
    <>
      <Show above='750px'>
        <Text color='pink.300' fontWeight='bold'> _____           _       __                     _              </Text>
        <Text color='pink.300' fontWeight='bold'>/ _  / __ _  ___| |__   / _\_ __  _ __ ___  ___| |_ ___  _ __  </Text>
        <Text color='pink.300' fontWeight='bold'>\// / / _` |/ __| &#39;_ \  \ \| &#39;_ \| &#39;__/ _ \/ __| __/ _ \| &#39;_ \ </Text>
        <Text color='pink.300' fontWeight='bold'> / //\ (_| | (__| | | | _\ \ |_) | | | (_) \__ \ || (_) | | | |</Text>
        <Text color='pink.300' fontWeight='bold'>/____/\__,_|\___|_| |_| \__/ .__/|_|  \___/|___/\__\___/|_| |_|</Text>
        <Text color='pink.300' fontWeight='bold'>                           |_|                                 </Text>
      </Show>
      <Show below='750px'>
        <Text color='pink.300' fontWeight='bold'> _____           _     </Text>
        <Text color='pink.300' fontWeight='bold'>/ _  / __ _  ___| |__  </Text>
        <Text color='pink.300' fontWeight='bold'>\// / / _` |/ __| &#39;_ \ </Text>
        <Text color='pink.300' fontWeight='bold'> / //\ (_| | (__| | | |</Text>
        <Text color='pink.300' fontWeight='bold'>/____/\__,_|\___|_| |_|</Text>
        <Text color='pink.300' fontWeight='bold'>                       </Text>
      </Show>
      <Text> </Text>
    </>
  );
}

export default TerminalTitle;
