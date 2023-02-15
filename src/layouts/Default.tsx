import { Box } from '@chakra-ui/react'
import TerminalBar from '../components/terminal/TerminalBar'
import TerminalTabBar from '../components/terminal/TerminalTabBar'
import TerminalWindow from '../components/terminal/TerminalWindow'

const Default = ({
  children,
  pageName,
}: {
  children: string | JSX.Element | JSX.Element[]
  pageName: string
}) => (
  <Box w="100vw" p="6" h="100svh">
    <Box
      boxShadow="base"
      rounded="md"
      bg="#282C34"
      h="calc(100svh - 48px)"
      w="calc(100vw - 48px)"
    >
      <TerminalBar pageName={pageName} />
      <TerminalTabBar />
      <TerminalWindow>
        <Box maxW="calc(100vw - 70px)">{children}</Box>
      </TerminalWindow>
    </Box>
  </Box>
)

export default Default
