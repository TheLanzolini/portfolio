import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 26px;
  margin-top: 26px;
  line-height: 1.5;
  background-color: #FF9800;
  color: white;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items; center;
    text-align: center;
  }
`

const Column = styled.div.attrs({
  alignself: props => props.alignself,
})`
  flex: 1;
  display: flex;
  justify-content: ${props => props.alignself};
  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`

const Footer = () => (
  <StyledFooter>
    I AM A FOOTER
  </StyledFooter>
)

export default Footer
