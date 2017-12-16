import styled from 'styled-components'

const StyledPanel = styled.div.attrs({
  fontSize: props => props.fontSize,
  color: props => props.color,
  backgroundcolor: props => props.backgroundcolor,
  padding: props => props.padding,
})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  font-size: ${props => props.fontSize || '40px'};
  position: relative;
  color: ${props => props.color || 'black'};
  background-color: ${props => props.backgroundcolor || 'transparent'};
  padding: ${props => props.padding || '0px'};
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`

export default StyledPanel
