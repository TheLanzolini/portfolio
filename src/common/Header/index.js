import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import './Header.css'

const HeaderContainer = styled.header`
  font-size: 22px;
  line-height: 3;
  border-bottom: 1px solid black;
`

const links = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
]

const Header = () => (
  <HeaderContainer>
    {
      links.map((link, index) => (<NavLink exact activeClassName="active" className="nav-link" key={index} to={link.to}>{link.name}</NavLink>))
    }
  </HeaderContainer>
)

export default Header
