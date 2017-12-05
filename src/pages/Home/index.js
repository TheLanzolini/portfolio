import React from 'react'
import WideSection from 'common/WideSection'
import TextPanel from 'common/TextPanel'
import styled from 'styled-components'
import myface from './myface.jpeg'
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

export default () => (
  <WideSection>
    <Helmet title="WAT" />
    <TextPanel color="white" backgroundColor="#FF9800">
      Alex Lanzoni
      <br />
      FE Web Developer
      <br />
      Gamer
    </TextPanel>
    <TextPanel>
      <MyFace src={myface} />
      <Caption>My smug face. Circa 2017.</Caption>
    </TextPanel>
  </WideSection>
)
