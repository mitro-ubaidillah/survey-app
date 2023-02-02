import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Plus Jakarta Sans', sans-serif`,
    body: `'Plus Jakarta Sans', sans-serif`,
  },
  colors: {
    bg: {
      primary: '#DFD4F3',
      secondary: '#EDA1A5'
    },
    btn: {
      primary: '#6A59A6',
      secondary: '#7E5BFA',
    }
  }
})

export default theme