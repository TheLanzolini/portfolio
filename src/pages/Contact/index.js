import React from 'react'
import { Helmet } from 'react-helmet'
import WideSection from 'common/WideSection'
import Panel from 'common/Panel'
import formal from 'images/formal.jpeg'
import informal from 'images/informal.jpeg'

const OverflowPanel = Panel.extend`
  overflow: hidden;
  @media screen and (max-width: 500px) {
    display: none;
  }
`

export default () => (
  <div>
    <Helmet title="Contact" />
    <WideSection>
      <Panel fontSize="28px" backgroundcolor="#1E88E5" color="white" padding="24px">
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
      <OverflowPanel>
        <img src={formal} />
      </OverflowPanel>
    </WideSection>
    <WideSection>
      <OverflowPanel>
        <img src={informal} />
      </OverflowPanel>
      <Panel fontSize="28px" backgroundcolor="#5E35B1" color="white" padding="24px">
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
