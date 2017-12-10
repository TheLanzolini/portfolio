import React from 'react'
import WideSection from 'common/WideSection'
import Panel from 'common/Panel'
import styled from 'styled-components'
import myface from 'images/myface.jpeg'
import { Helmet } from 'react-helmet'
import Skills from './Skills'
import Browser from './Browser'

import githubImg from 'images/github.svg'

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

const MyFaceFade = styled.span`
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

const BrowsersAndDevices = WideSection.extend`
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;
`

const BrowsersTitle = TitleSection.extend`
  font-size: 40px;
  margin-top: 0;
`

const GithubSection = WideSection.extend`
  height: 50px;
`

const GithubImg = styled.img`
  height: 75%;
`

const GithubTextPanel = Panel.extend`
  flex: 3;
  flex-direction: row;
  justify-content: flex-start;
  font-size: 24px;
`

export default () => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <GithubSection>
      <Panel backgroundcolor="#24292e">
        <GithubImg src={githubImg} />
      </Panel>
      <GithubTextPanel backgroundcolor="#24292e" color="white">
        <span>Check out my github!&nbsp;</span>
        <a target="_blank" href="https://github.com/TheLanzolini">https://github.com/TheLanzolini</a>
      </GithubTextPanel>
    </GithubSection>
    <WideSection>
      <Panel color="white" backgroundcolor="#FF9800">
        Alex Lanzoni
        <br />
        FE Web Developer
        <br />
        and Gamer
      </Panel>
      <Panel>
        <MyFaceFade>
          <MyFace src={myface} />
          <Caption>My smug face. Circa 2017.</Caption>
        </MyFaceFade>
      </Panel>
    </WideSection>
    <TitleSection>Skills</TitleSection>
    <SkillSection>
      <Skills />
      <SkillText>
        Although there are more frameworks and languages I have experience with, these are the prominent skills.
        This website was built using some of these skills and you can find the whole source code on:
        &nbsp;<a target="_blank" href="https://github.com/thelanzolini/portfolio">https://github.com/thelanzolini/portfolio</a>.
      </SkillText>
    </SkillSection>
    <BrowsersAndDevices>
      <BrowsersTitle>Browsers and Responsive Design</BrowsersTitle>
      {
        (['chrome', 'firefox', 'edge', 'safari', 'ie']).map(browser => (<Browser key={browser} browser={browser} />))
      }
      <SkillText>
        I have experience developing and supporting every major browser for Desktop and Handheld, including legacy IE.
        I also have worked to make every website and app perform well and provide great user experience on handheld devices.
      </SkillText>
    </BrowsersAndDevices>
  </div>
)
