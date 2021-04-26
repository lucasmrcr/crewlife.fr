import React from 'react'
import './style/index.scss'
import Header from './components/header'
import AppContainer from './components/app-container'
import Card from './components/card'
import Footer from './components/footer'
import Team from './components/team'

function App() {
  return (
      <>
      <Header/>
      <AppContainer>
          <Team />


          <Card>
              <></>
          </Card>
      </AppContainer>
      <Footer/>
      </>
  )
}

export default App
