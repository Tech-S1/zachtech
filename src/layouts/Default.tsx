import { Box, Flex } from '@chakra-ui/react'
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
  <Box w="100vw" h="100vh" bgGradient="linear(to-r, green.200, pink.500)">
    <Flex>
      <Box
        boxShadow="base"
        m="6"
        rounded="md"
        bg="#282C34"
        h="calc(100vh - 50px)"
        w="100vw"
      >
        <TerminalBar pageName={pageName} />
        <TerminalTabBar />
        <TerminalWindow>{children}</TerminalWindow>
      </Box>
    </Flex>
  </Box>
)

export default Default
