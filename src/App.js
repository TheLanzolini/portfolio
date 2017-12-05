import React from 'react'
import { renderRoutes } from 'react-router-config'
import styled from 'styled-components'
import Header from 'common/Header'

import './App.css'

const AppContainer = styled.div`
  width: 960px;
  margin: auto;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`

class App extends React.Component {
  render() {
    return (
      <AppContainer>
        <Header />
        {renderRoutes(this.props.route.routes)}
      </AppContainer>
    )
  }
}

export default App
