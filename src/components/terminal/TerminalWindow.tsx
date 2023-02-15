import { Box, Flex } from '@chakra-ui/react'

const TerminalWindow = ({
  children,
}: {
  children: string | JSX.Element | JSX.Element[]
}) => (
  <Flex minWidth="max-content" gap="2" p="1">
    <Box
      color="white"
      px="2"
      w="100%"
      fontFamily="Fira Code"
      style={{ whiteSpace: 'pre-wrap' }}
      overflowY="auto"
      maxHeight="calc(100svh - 150px)"
    >
      {children}
    </Box>
  </Flex>
)

export default TerminalWindow
