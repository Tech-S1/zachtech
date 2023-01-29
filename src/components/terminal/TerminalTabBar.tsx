import { Box, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes/routes'

const TerminalTabBarLink = ({
  path,
  title,
}: {
  path: string
  title: string
}) => (
  <Link to={path}>
    <Box color="white" px="2">
      {title}
    </Box>
  </Link>
)

const TerminalTabBar = () => (
  <Flex bg="#21252B" minWidth="max-content" alignItems="center" gap="2" p="1">
    {routes.map(({ path, loader }) =>
      TerminalTabBarLink({ path, ...loader() })
    )}
  </Flex>
)

export default TerminalTabBar
