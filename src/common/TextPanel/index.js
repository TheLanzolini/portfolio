import React from 'react'
import styled from 'styled-components'

const StyledTextPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 40px;
  position: relative;
`

export default (props) => (
  <StyledTextPanel>{props.children}</StyledTextPanel>
)
