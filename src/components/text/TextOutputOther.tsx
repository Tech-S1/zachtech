import { Text } from '@chakra-ui/react'
import { DEFAULT_SPACING } from './constants'

const ProcessCompletedCommandText = () => <Text>[Process completed]</Text>

const HelpCommandText = () => (
  <>
    <Text>Basic Commands:</Text>
    <Text>{DEFAULT_SPACING}help - Display Help</Text>
    <Text>{DEFAULT_SPACING}clear - Clear Screen</Text>
    <Text>{DEFAULT_SPACING}profile - Display Profile</Text>
  </>
)

export { HelpCommandText, ProcessCompletedCommandText }
