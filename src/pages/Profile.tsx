import Default from '../layouts/Default'
import TerminalTitle from '../components/text/TextOutputTitle'
import TerminalDefaultPromptText from '../components/terminal/TerminalDefaultPromptText'
import { ProcessCompletedCommandText } from '../components/text/TextOutputOther'
import TextOutputProfile from '../components/text/TextOutputProfile'
import { DEFAULT_TEXT_EMPTY } from '../components/text/constants'
import { useLoaderData } from 'react-router-dom'

const Profile = () => {
  const { title } = useLoaderData() as { title: string }
  return (
    <Default pageName={title}>
      <TerminalTitle />
      <TerminalDefaultPromptText location="Home" text="profile" />
      <TextOutputProfile />
      {DEFAULT_TEXT_EMPTY}
      <ProcessCompletedCommandText />
    </Default>
  )
}

export default Profile
