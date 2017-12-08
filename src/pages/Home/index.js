import React from 'react'
import WideSection from 'common/WideSection'
import Panel from 'common/Panel'
import styled from 'styled-components'
import myface from 'images/myface.jpeg'
import { Helmet } from 'react-helmet'
import { fadeInTop, fadeInLeftDelay, fadeInRightDelay } from 'common/Animation'
import MyHead from 'common/MyHead'
import Skills from './Skills'

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
  animation: ${fadeInTop} 0.5s ease;
`

const TextFadeIn = styled.span`
  animation: ${fadeInLeftDelay} 0.5s ease;
`

const MyFaceFadeIn = styled.span`
  animation ${fadeInRightDelay} 0.5s ease;
  text-align: center;
`

const TitleSection = styled.h1`
  line-height: 1;
  width: 100%;
  display: inline-block;
  font-size: 56px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 0;
`

const SkillSection = WideSection.extend`
  padding: 5px;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`

const SkillText = styled.div`
  text-align: center;
  a {
    color: black;
  }
`

export default () => (
  <div>
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
    <TitleSection>Skills</TitleSection>
    <SkillSection>
      <Skills />
      <SkillText>
        Although there are more frameworks and languages I have experience with, these are the prominent skills.
        This website was built using some of these skills and you can find the whole source code on:
        &nbsp;<a target="_blank" href="https://github.com/thelanzolini/portfolio">https://github.com/thelanzolini/portfolio</a>.
      </SkillText>
    </SkillSection>
    <WideSection>
      <MyHead />
    </WideSection>
  </div>
)
