import React from 'react'
import styled from 'styled-components'

const Foldover = (props) => {
  const { orientation, color } = props
  const size = props.size || 75
  const xOrient = orientation.includes('left') ? 'left' : 'right'
  const yOrient = orientation.includes('top') ? 'top' : 'bottom'
  const rotation = orientation === 'bottom-left' ? '-45' :
    orientation === 'bottom-right' ? '-135' :
      orientation === 'top-right' ? '135' : 45
  const StyledFoldover = styled.div`
    position: absolute;
    border: ${size}px solid transparent;
    border-right: ${size}px solid ${color || '#FF9800'};
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

export default Foldover
