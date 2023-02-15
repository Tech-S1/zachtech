import { extendTheme } from '@chakra-ui/react'

const config = {
  // initialColorMode: 'dark',
}

const styles = {
  global: () => ({
    body: {
      bgGradient:
        'linear-gradient(0deg, rgba(154,230,180,1) 0%, rgba(213,63,139,1) 100%)',
      backgroundRepeat: 'no-repeat',
      // backgroundAttachment: 'fixed',
    },
  }),
}

const theme = extendTheme({ config, styles })

export default theme
