import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const TextPanel = (props) => {
  const { color, backgroundColor, fontSize } = props
  const StyledTextPanel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    font-size: ${fontSize};
    position: relative;
    ${color ? `color: ${color}` : ''};
    ${backgroundColor ? `background-color: ${backgroundColor}` : ''};
  `
  return (
    <StyledTextPanel>{props.children}</StyledTextPanel>
  )
}

TextPanel.defaultProps = {
  color: 'black',
  backgroundColor: 'transparent',
  fontSize: '40px',
}

TextPanel.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
}

export default TextPanel
