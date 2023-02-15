import { Text } from '@chakra-ui/react'

const ProcessCompletedCommandText = () => <Text>[Process completed]</Text>

const HelpCommandText = () => (
  <>
    <Text>Basic Commands:</Text>
    <Text ml="5">help - Display Help</Text>
    <Text ml="5">clear - Clear Screen</Text>
    <Text ml="5">profile - Display Profile</Text>
  </>
)

export { HelpCommandText, ProcessCompletedCommandText }
