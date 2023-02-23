import Default from '../layouts/Default'
import TerminalTitle from '../components/text/TerminalTitleText'
import TerminalDefaultPromptText from '../components/terminal/TerminalDefaultPromptText'
import { ProcessCompletedCommandText } from '../components/text/ProcessCompletedCommandText'
import { useLoaderData } from 'react-router-dom'
import { DisplayOnlyCommand } from '../commands/Command'

const CommandViewOnly = ({ command }: { command: DisplayOnlyCommand }) => {
  const { title } = useLoaderData() as { title: string }

  return (
    <Default pageName={title}>
      <TerminalTitle />
      <TerminalDefaultPromptText location="Home" text={command.command} />
      {command.jsx}
      <ProcessCompletedCommandText />
    </Default>
  )
}

export default CommandViewOnly
