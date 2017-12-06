import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Panel = (props) => {
  const { color, backgroundColor, fontSize } = props
  const StyledPanel = styled.div`
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
    <StyledPanel>{props.children}</StyledPanel>
  )
}

Panel.defaultProps = {
  color: 'black',
  backgroundColor: 'transparent',
  fontSize: '40px',
}

Panel.propTypes = {
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
}

export default Panel
