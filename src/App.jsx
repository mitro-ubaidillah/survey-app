import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home'

//font
import '@fontsource/plus-jakarta-sans/400.css'
import '@fontsource/plus-jakarta-sans/500.css'
import '@fontsource/plus-jakarta-sans/600.css'
import '@fontsource/plus-jakarta-sans/700.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Survey from './pages/Survey'
import theme from './utils/extendedTheme'
import { Provider } from 'react-redux'
import store from '../store'
import Complete from './pages/Complete'
import TestRadio from './pages/TestRadio'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/survey' element={<Survey />} />
            <Route path='/complete' element={<Complete />} />
            <Route path='/test' element={<TestRadio />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
