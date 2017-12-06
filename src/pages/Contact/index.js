import React from 'react'
import { Helmet } from 'react-helmet'
import WideSection from 'common/WideSection'
import TextPanel from 'common/TextPanel'

export default () => (
  <div>
    <Helmet title="Contact" />
    <WideSection>
      <TextPanel fontSize="28px" backgroundColor="#1E88E5" color="white">
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
      </TextPanel>
    </WideSection>
    <WideSection>
      <TextPanel fontSize="28px" backgroundColor="#5E35B1" color="white">
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
      </TextPanel>
    </WideSection>
  </div>
)
