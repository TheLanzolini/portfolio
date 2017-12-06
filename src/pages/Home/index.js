import React from 'react'
import WideSection from 'common/WideSection'
import Panel from 'common/Panel'
import styled, { keyframes } from 'styled-components'
import myface from 'images/myface.jpeg'
import { Helmet } from 'react-helmet'

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

const fadeInLeft = keyframes`
  0% {
    opacity: 0.0;
    transform: translateX(-5%);
  }
  50% {
    opacity: 0.0;
    transform: translateX(-5%);
  }
  100% {
    opacity: 1.0;
    transform: translateX(0%);
  }
`

const fadeInRight = keyframes`
  0% {
    opacity: 0.0;
    transform: translateX(5%);
  }
  50% {
    opacity: 0.0;
    transform: translateX(5%);
  }
  100% {
    opacity: 1.0;
    transform: translateX(0%);
  }
`

const fadeInTop = keyframes`
  0% {
    opacity: 0.0;
    transform: translateY(-5%);
  }
  100% {
    opacity: 1.0;
    transform: translateY(0%);
  }
`

const FadeInTop = styled.div`
  animation: ${fadeInTop} 0.75s ease;
`

const TextFadeIn = styled.span`
  animation: ${fadeInLeft} 0.75s ease;
`

const MyFaceFadeIn = styled.span`
  animation ${fadeInRight} 0.75s ease;
  text-align: center;
`

export default () => (
  <FadeInTop>
    <WideSection>
      <Helmet title="Home" />
      <Panel color="white" backgroundColor="#FF9800">
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
