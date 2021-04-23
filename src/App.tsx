import React from 'react'
import './style/index.scss'
import Header from './components/header'
import AppContainer from './components/app-container'
import Card from './components/card'

function App() {
  return (
      <>
      <Header/>
      <AppContainer>
          <Card title="test" component={null} />
          <Card title="test" component={null} />
      </AppContainer>
      </>
  )
}

export default App
