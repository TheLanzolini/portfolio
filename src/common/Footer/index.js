import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  padding: 26px;
  margin-top: 26px;
  line-height: 1.5;
  background-color: #FF9800;
  color: white;
  display: flex;
  justify-content: center;
`

const Column = styled.div.attrs({
  alignself: props => props.alignself,
})`
  flex: 1;
  display: flex;
  justify-content: ${props => props.alignself};
`

const Footer = () => (
  <StyledFooter>
    <Column alignself="flex-end">
      <div>
        <div>Alex Lanzoni</div>
        <div><a href="mailto:alexander.lanzoni@gmail.com">alexander.lanzoni@gmail.com</a></div>
        <div><a href="mailto:thelanzolini@gmail.com">thelanzolini@gmail.com</a></div>
      </div>
    </Column>
    <Column alignself="center">
      <div>
        <div><a target="_blank" href="http://lanzo.space/blog">Blog</a></div>
        <div><a target="_blank" href="http://codepen.io/TheLanzolini/">My Codepen</a></div>
        <div><a target="_blank" href="https://github.com/thelanzolini">Github</a></div>
        <div><a target="_blank" href="http://trinityforcenetwork.com/">TForce</a></div>
        <div><a target="_blank" href="http://twitch.tv/thelanzolini">Twitch</a></div>
      </div>
    </Column>
    <Column alignself="flex-start">
      <div>
        <div><a target="_blank" href="https://lanzoalerts.herokuapp.com/">LanzoAlerts</a></div>
        <div><a target="_blank" href="http://twitter.com/thelanzolini">Twitter</a></div>
        <div><a target="_blank" href="https://www.trinityforcenetwork.com/show?id=91">TForceGG</a></div>
        <div><a target="_blank" href="http://lanzo.space/extralifealert">Extra Life Alerts</a></div>
        <div><a target="_blank" href="http://lanzo.space/e3bingo">E3 BINGO!</a></div>
      </div>
    </Column>
  </StyledFooter>
)

export default Footer
