import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledPanel = styled.div.attrs({
  fontSize: props => props.fontSize,
  color: props => props.color,
  backgroundcolor: props => props.backgroundcolor,
})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  font-size: ${props => props.fontSize};
  position: relative;
  color: ${props => props.color};
  background-color: ${props => props.backgroundcolor};
`

const Panel = (props) => {
  return (
    <StyledPanel {...props}>{props.children}</StyledPanel>
  )
}

Panel.defaultProps = {
  color: 'black',
  backgroundcolor: 'transparent',
  fontSize: '40px',
}

Panel.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundcolor: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
}

export default Panel
