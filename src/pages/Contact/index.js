import React from 'react'
import { Helmet } from 'react-helmet'
import WideSection from 'common/WideSection'
import Panel from 'common/Panel'
import formal from 'images/formal.jpeg'
import informal from 'images/informal.jpeg'

export default () => (
  <div>
    <Helmet title="Contact" />
    <WideSection>
      <Panel fontSize="28px" backgroundColor="#1E88E5" color="white">
        <span>
          Formal
          <br />
          <br />
          Alex Lanzoni
          <br />
          <a href="mailto:alexander.lanzoni@gmail.com">alexander.lanzoni@gmail.com</a>
          <br />
          860.682.4376
        </span>
      </Panel>
      <Panel>
        <img src={formal} />
      </Panel>
    </WideSection>
    <WideSection>
      <Panel>
        <img src={informal} />
      </Panel>
      <Panel fontSize="28px" backgroundColor="#5E35B1" color="white">
        <span>
          Informal
          <br />
          <br />
          Alex "TheLanzolini" Lanzoni
          <br />
          <a href="mailto:thelanzolini@gmail.com">thelanzolini@gmail.com</a>
          <br />
          <a target="_blank" href="https://twitter.com/thelanzolini">@TheLanzolini</a>
        </span>
      </Panel>
    </WideSection>
  </div>
)
