import React from 'react'
import { Helmet } from 'react-helmet'
import WideSection from 'common/WideSection'
import Panel from 'common/Panel'
import formal from 'images/formal.jpeg'
import informal from 'images/informal.jpeg'
import { fadeInTop, fadeInTopDelay } from 'common/Animation'
import styled from 'styled-components'

const FadeInTop = styled.div`
  animation: ${fadeInTop} 0.25s ease;
`

const FadeInTopDelay = styled.div`
  animation: ${fadeInTopDelay} 0.5s ease;
`

const OverflowPanel = Panel.extend`
  overflow: hidden;
`

export default () => (
  <div>
    <Helmet title="Contact" />
    <FadeInTop>
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
    </FadeInTop>
    <FadeInTopDelay>
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
    </FadeInTopDelay>
  </div>
)
