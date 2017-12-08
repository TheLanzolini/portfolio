import React from 'react'
import WideSection from 'common/WideSection'
import Panel from 'common/Panel'
import styled from 'styled-components'
import myface from 'images/myface.jpeg'
import { Helmet } from 'react-helmet'
import { fadeInTop, fadeInLeftDelay, fadeInRightDelay } from 'common/Animation'
import MyHead from 'common/MyHead'

import html5 from 'images/skills/html5.png'
import css3 from 'images/skills/css3.svg'
import js from 'images/skills/js.png'
import node from 'images/skills/node.png'
import react from 'images/skills/react.png'
import redux from 'images/skills/redux.png'
import angular from 'images/skills/angular.png'
import electron from 'images/skills/electron.png'
import webpack from 'images/skills/webpack.png'
import gulp from 'images/skills/gulp.jpg'
import git from 'images/skills/git.png'
import sass from 'images/skills/sass.png'
import aws from 'images/skills/aws.png'
import windows from 'images/skills/windows.png'
import mac from 'images/skills/mac.png'
import linux from 'images/skills/linux.png'
import cordova from 'images/skills/cordova.png'
import cc from 'images/skills/cc.png'
import Skill from 'common/Skill'

const skills = [
  html5,
  css3,
  js,
  node,
  react,
  redux,
  angular,
  electron,
  webpack,
  gulp,
  git,
  sass,
  aws,
  windows,
  mac,
  linux,
  cordova,
  cc,
]

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

const SkillWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: centerReact.Component;
  align-items: center;
`

const SkillLogo = styled.img`
  width: 100%;
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
      {
        skills.map((skill, index) => (
          <SkillWrapper key={index}>
            <SkillLogo src={skill} />
          </SkillWrapper>
        ))
      }
      <SkillText>
        Although there are more frameworks and languages I have experience with, these are the prominent skills.
        This website was built using some of these skills and you can find the whole source code on:
        &nbsp;<a target="_blank" href="https://github.com/thelanzolini/portfolio">https://github.com/thelanzolini/portfolio</a>.
      </SkillText>
      <Skill />
    </SkillSection>
    <WideSection>
      <MyHead />
    </WideSection>
  </div>
)
