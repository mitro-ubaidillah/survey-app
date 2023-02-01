import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home'

//font
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'

const App =() =>{
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  )
}

export default App
