import { useRef, useState, useEffect, FormEvent } from 'react'
import { Text } from '@chakra-ui/react'
import Default from '../layouts/Default'
import TerminalTitle from '../components/text/TerminalTitleText'
import TerminalDefaultPromptText from '../components/terminal/TerminalDefaultPromptText'
import TerminalDefaultPromptInput from '../components/terminal/TerminalDefaultPromptInput'
import commands from '../commands/commands'
import {
  Command,
  isActionCommand,
  isDisplayOnlyCommand,
} from '../commands/Command'
import { useLoaderData } from 'react-router-dom'

const commandMapper = (userCommand: string): Command =>
  commands.filter(systemCommand => systemCommand.command === userCommand)[0]

const Home = () => {
  const { title } = useLoaderData() as { title: string }
  const [terminalInput, setTerminalInput] = useState<string>('')
  const [inputStack, setInputStack] = useState<JSX.Element[]>([])
  const pageBottomRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    pageBottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [inputStack])

  const onInputSubmit = (e: FormEvent) => {
    e.preventDefault()
    const command = commandMapper(terminalInput)

    if (command && isDisplayOnlyCommand(command)) {
      const tmpStack: JSX.Element[] = []
      tmpStack.push(
        <TerminalDefaultPromptText location="Home" text={terminalInput} />
      )
      tmpStack.push(command.jsx)

      tmpStack.push(<Text> </Text>)
      setInputStack([...inputStack, ...tmpStack])
    }

    if (command && isActionCommand(command)) {
      command.executor({ setTerminalInput, setInputStack })
    }

    if (!command) {
      const tmpStack: JSX.Element[] = []
      tmpStack.push(
        <TerminalDefaultPromptText location="Home" text={terminalInput} />
      )
      tmpStack.push(<Text>Command Not Found: Type 'help' for help menu </Text>)

      tmpStack.push(<Text> </Text>)
      setInputStack([...inputStack, ...tmpStack])
    }

    setTerminalInput('')
  }

  return (
    <Default pageName={title}>
      <>
        <TerminalTitle />
        {inputStack}
        <TerminalDefaultPromptInput
          onSubmit={e => onInputSubmit(e)}
          onInputChange={e =>
            setTerminalInput((e.target as HTMLInputElement).value.toLowerCase())
          }
          inputValue={terminalInput}
          location="Home"
        />
        <div ref={pageBottomRef} style={{ height: '50px' }} />
      </>
    </Default>
  )
}

export default Home
