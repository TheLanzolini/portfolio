import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledFoldover = styled.div.attrs({
  size: props => props.size,
  color: props => props.color,
  rotation: props => props.rotation,
  xOrient: props => props.xOrient,
  yOrient: props => props.yOrient,
})`
  position: absolute;
  border: ${props => props.size}px solid transparent;
  border-right: ${props => props.size}px solid ${props => props.color};
  width: 1px;
  height: 1px;
  background-color: transparent;
  ${props => props.xOrient}: -${props => props.size}px;
  ${props => props.yOrient}: -${props => props.size}px;
  transform: rotate(${props => props.rotation}deg);
  box-shadow: 1px 0px 2px 1px #424242;
`

const Foldover = (props) => {
  const { orientation, color, size } = props
  const xOrient = orientation.includes('left') ? 'left' : 'right'
  const yOrient = orientation.includes('top') ? 'top' : 'bottom'
  const rotation = orientation === 'bottom-left' ? '-45' :
    orientation === 'bottom-right' ? '-135' :
      orientation === 'top-right' ? '135' : 45
  const finalProps = { xOrient, yOrient, color, size, rotation }
  return (<StyledFoldover {...finalProps} />)
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
