import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
// import { NavLink } from 'react-router-dom'

const AboutPage = styled.div`
  padding: 8px;
  a {
    color: black;
  }
`

export default () => (
  <AboutPage>
    <Helmet title="About" />
    <div>
      <h2>About</h2>
      <p>This is a react base. sup.</p>
    </div>
  </AboutPage>
)
