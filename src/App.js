import React from 'react'
import { renderRoutes } from 'react-router-config'
import styled from 'styled-components'
import Header from 'common/Header'
import Footer from 'common/Footer'
import { Helmet } from 'react-helmet'

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
        <Helmet
          htmlAttributes={{ lang: 'en', amp: undefined }}
          titleTemplate="Alex Lanzoni Portfolio | %s"
          titleAttributes={{ itemprop: 'name', lang: 'en' }}
          meta={[
            { name: 'description', content: 'Server side rendering example' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          ]}
        />
        <Header />
        {renderRoutes(this.props.route.routes)}
        <Footer />
      </AppContainer>
    )
  }
}

export default App
