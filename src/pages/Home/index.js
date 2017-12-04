import React from 'react'
import WideSection from 'common/WideSection'
import TextPanel from 'common/TextPanel'
import styled from 'styled-components'
import myface from './myface.jpeg'
import Foldover from 'common/Foldover'

const MyFace = styled.img`
  width: 100%;
`

export default () => (
  <WideSection>
    <TextPanel>
      <Foldover orientation="top-left" />
      Alex Lanzoni
      <br />
      FE Web Developer
      <br />
      Gamer
      <Foldover orientation="bottom-left" />
    </TextPanel>
    <TextPanel>
      <Foldover orientation="top-right" />
      <MyFace src={myface} />
      <Foldover orientation="bottom-right" />
    </TextPanel>
  </WideSection>
)
