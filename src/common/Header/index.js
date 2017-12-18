import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import './Header.css'

const HeaderContainer = styled.header`
  font-size: 22px;
  line-height: 3;
  border-bottom: 1px solid black;
  margin-bottom: 12px;
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 10;
    background-color: white;
    top: 0;
    a {
      padding: 0;
    }
  }
`

const links = [
  { name: 'Home', to: '/' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' },
  { name: 'About', to: '/about' },
]

const Header = () => (
  <HeaderContainer>
    {
      links.map((link, index) => (<NavLink exact={link.name == 'Home'} activeClassName="active" className="nav-link" key={index} to={link.to}>{link.name}</NavLink>))
    }
  </HeaderContainer>
)

export default Header
