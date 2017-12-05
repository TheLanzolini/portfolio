import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Foldover = (props) => {
  const { orientation, color, size } = props
  const xOrient = orientation.includes('left') ? 'left' : 'right'
  const yOrient = orientation.includes('top') ? 'top' : 'bottom'
  const rotation = orientation === 'bottom-left' ? '-45' :
    orientation === 'bottom-right' ? '-135' :
      orientation === 'top-right' ? '135' : 45
  const StyledFoldover = styled.div`
    position: absolute;
    border: ${size}px solid transparent;
    border-right: ${size}px solid ${color};
    width: 1px;
    height: 1px;
    background-color: transparent;
    ${xOrient}: -${size}px;
    ${yOrient}: -${size}px;
    transform: rotate(${rotation}deg);
    box-shadow: 1px 0px 2px 1px #424242;
  `
  return (<StyledFoldover />)
}

Foldover.defaultProps = {
  size: 75,
  color: '#FF9800',
}

Foldover.propTypes = {
  orientation: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
}

export default Foldover
