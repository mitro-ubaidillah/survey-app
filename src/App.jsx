import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home'

//font
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
