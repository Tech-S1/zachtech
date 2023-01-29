import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import theme from '../theme/theme'
import { router } from '../routes/routes'
import '@fontsource/fira-code'

const App = () => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <RouterProvider router={router} />
  </ChakraProvider>
)

export default App
