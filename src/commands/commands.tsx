import { Text } from '@chakra-ui/react'
import TextOutputProfile from '../components/text/TextOutputProfile'
import TextOutputProjects from '../components/text/TextOutputProjects'
import { ActionCommand, Command, DisplayOnlyCommand } from './Command'

const profile: DisplayOnlyCommand = {
  type: 'DisplayOnlyCommand',
  command: 'profile',
  description: 'Display Profile',
  jsx: <TextOutputProfile />,
}

const projects: DisplayOnlyCommand = {
  type: 'DisplayOnlyCommand',
  command: 'projects',
  description: 'Display Projects',
  jsx: <TextOutputProjects />,
}

const clear: ActionCommand = {
  type: 'ActionCommand',
  command: 'clear',
  description: 'Clear Terminal',
  executor: ({
    setInputStack,
    setTerminalInput,
  }: {
    setInputStack: any
    setTerminalInput: any
  }) => {
    setInputStack([])
    setTerminalInput('')
  },
}

const commands = [profile, clear, projects]

const help: DisplayOnlyCommand = {
  type: 'DisplayOnlyCommand',
  command: 'help',
  description: 'Help Menu',
  jsx: (
    <>
      <Text>Basic Commands:</Text>
      {commands.map((systemCommand: Command) => (
        <Text ml="5">
          {`${systemCommand.command} - ${systemCommand.description}`}
        </Text>
      ))}
    </>
  ),
}

export { profile, clear, help, projects }
export default [...commands, help]
