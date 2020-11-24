import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Heading from './components/Heading/index'
import SignIn from './components/SignIn/index'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
      font-family: 'Poppins', sans-serif;
    }
`

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Heading title='Samgram' />
      <Switch>
        <Route exact path='/' component={SignIn} />
      </Switch>
      <GlobalStyle />
      <link
        href='https://fonts.googleapis.com/css?family=Poppins&display=swap'
        rel='stylesheet'
      />
    </BrowserRouter>
  )
}

export default App
