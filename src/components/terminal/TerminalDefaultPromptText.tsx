import { Text } from '@chakra-ui/react'
import SizeWrapper from '../../layouts/SizeWrapper'
import { PromptBody, PromptInput } from './TerminalDefaultPrompt'

const TerminalDefaultPromptText = ({
  location,
  text,
}: {
  location: string
  text: string
}) => (
  <SizeWrapper
    small={
      <>
        <Text>
          <PromptBody location={location} />
        </Text>
        <Text>
          <PromptInput>{text}</PromptInput>
        </Text>
      </>
    }
    large={
      <Text>
        <PromptBody location={location} />
        <PromptInput>{text}</PromptInput>
      </Text>
    }
  />
)

export default TerminalDefaultPromptText
