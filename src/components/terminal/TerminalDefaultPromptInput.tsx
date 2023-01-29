import { Input, Text } from '@chakra-ui/react'
import { ChangeEventHandler, FormEventHandler } from 'react'
import SizeWrapper from '../../layouts/SizeWrapper'
import { PromptBody, PromptInput } from './TerminalDefaultPrompt'

const TerminalDefaultPromptInput = ({
  location,
  inputValue,
  onInputChange,
  onSubmit,
}: {
  location: string
  inputValue: string
  onInputChange: ChangeEventHandler
  onSubmit: FormEventHandler
}) => (
  <form onSubmit={onSubmit}>
    <SizeWrapper
      small={
        <>
          <Text>
            <PromptBody location={location} />
          </Text>
          <Text>
            <PromptInput>
              <Input
                placeholder="Type a command..."
                value={inputValue}
                onChange={onInputChange}
                autoFocus
                variant="unstyled"
                w="calc(100vw - 110px)"
              />
            </PromptInput>
          </Text>
        </>
      }
      large={
        <Text>
          <PromptBody location={location} />
          <PromptInput>
            <Input
              placeholder="Type a command..."
              value={inputValue}
              onChange={onInputChange}
              autoFocus
              variant="unstyled"
              w="calc(100vw - 430px) "
            />
          </PromptInput>
        </Text>
      }
    />
  </form>
)

export default TerminalDefaultPromptInput
