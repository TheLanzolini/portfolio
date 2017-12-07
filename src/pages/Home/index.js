import React from 'react'
import WideSection from 'common/WideSection'
import Panel from 'common/Panel'
import styled from 'styled-components'
import myface from 'images/myface.jpeg'
import { Helmet } from 'react-helmet'
import { fadeInTop, fadeInLeftDelay, fadeInRightDelay } from 'common/Animation'

const MyFace = styled.img`
  width: 66%;
  height: 66%;
  border-radius: 100%;
`

const Caption = styled.p`
  color: #9E9E9E;
  font-size: 14px;
  font-style: italic;
  text-align: center;
`

const FadeInTop = styled.div`
  animation: ${fadeInTop} 0.75s ease;
`

const TextFadeIn = styled.span`
  animation: ${fadeInLeftDelay} 0.75s ease;
`

const MyFaceFadeIn = styled.span`
  animation ${fadeInRightDelay} 0.75s ease;
  text-align: center;
`

export default () => (
  <FadeInTop>
    <WideSection>
      <Helmet title="Home" />
      <Panel color="white" backgroundcolor="#FF9800">
        <TextFadeIn>
          Alex Lanzoni
          <br />
          FE Web Developer
          <br />
          and Gamer
        </TextFadeIn>
      </Panel>
      <Panel>
        <MyFaceFadeIn>
          <MyFace src={myface} />
          <Caption>My smug face. Circa 2017.</Caption>
        </MyFaceFadeIn>
      </Panel>
    </WideSection>
  </FadeInTop>
)
