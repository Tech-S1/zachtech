import { useRef, useState, useEffect, FormEvent } from 'react'
import { Text } from '@chakra-ui/react'
import Default from '../layouts/Default'
import TerminalTitle from '../components/text/TextOutputTitle'
import TerminalDefaultPromptText from '../components/terminal/TerminalDefaultPromptText'
import TerminalDefaultPromptInput from '../components/terminal/TerminalDefaultPromptInput'
import { HelpCommandText } from '../components/text/TextOutputOther'
import TextOutputProfile from '../components/text/TextOutputProfile'
import Overlay from '../layouts/Overlay'
import { useLoaderData } from 'react-router-dom'
import Pong from '../components/Pong'

const initStack = (): JSX.Element[] => [
  <>
    <TerminalDefaultPromptText location="Home" text="help" />
    <HelpCommandText />
    <Text> </Text>
  </>,
]

const commandMapper = (command: string): JSX.Element => {
  switch (command) {
    case 'help':
      return <HelpCommandText />
    case 'profile':
      return <TextOutputProfile />
    case 'pong':
      if (window.innerWidth < 750) {
        return <Text>Bigger window needed for this game, Sorry.</Text>
      }
      break
    default:
      return (
        <>
          <Text>Unknown Command.</Text>
          <Text>Type help for all commands.</Text>
        </>
      )
  }
  return <></>
}

const Home = () => {
  const { title } = useLoaderData() as { title: string }
  const [terminalInput, setTerminalInput] = useState<string>('')
  const [inputStack, setInputStack] = useState<JSX.Element[]>(initStack())
  const [overlayCommand, setOverlayCommand] = useState<string>('')
  const pageBottomRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    pageBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [inputStack])

  const clearInput = () => {
    setInputStack([])
    setTerminalInput('')
  }

  const commandExecutor = (command: string) => {
    switch (command) {
      case 'pong':
        setOverlayCommand('pong')
        break
      default:
        return
    }
  }

  const onInputSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (terminalInput === 'clear') {
      clearInput()
      return
    }

    const tmpStack: JSX.Element[] = []
    tmpStack.push(
      <TerminalDefaultPromptText location="Home" text={terminalInput} />
    )
    tmpStack.push(commandMapper(terminalInput))
    commandExecutor(terminalInput)
    tmpStack.push(<Text> </Text>)
    setInputStack([...inputStack, ...tmpStack])
    setTerminalInput('')
  }

  return (
    <Default pageName={title}>
      {overlayCommand ? (
        <Overlay
          dismissKey="q"
          dismiss={() => {
            setOverlayCommand('')
          }}
        >
          <Pong />
        </Overlay>
      ) : (
        <>
          <TerminalTitle />
          {inputStack}
          <TerminalDefaultPromptInput
            onSubmit={e => onInputSubmit(e)}
            onInputChange={e =>
              setTerminalInput((e.target as HTMLInputElement).value)
            }
            inputValue={terminalInput}
            location="Home"
          />
          <div ref={pageBottomRef} style={{ height: '30px' }} />
        </>
      )}
    </Default>
  )
}

export default Home
