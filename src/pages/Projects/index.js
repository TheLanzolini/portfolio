import React from 'react'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import Split from 'common/Split'

const Professional = () => <Split load={import('./Professional')} />
const Personal = () => <Split load={import('./Personal')} />

const NavWrapper = styled.div`
  line-height: 2;
  font-weight: lighter;
  font-size: 20px;
  text-align: left;
  a {
    color: black;
    text-decoration: none;
    display: inline-block;
    padding: 0 12px 0 0;
  }
  .active {
    font-weight: normal;
  }
`

const Projects = (props) => {
  const isPersonal = (!!props.match.params && !!props.match.params.type && props.match.params.type === 'personal')
  return (
    <div>
      <Helmet>
        <title>{isPersonal ? 'Personal Projects' : 'Professional Projects'}</title>
      </Helmet>
      <NavWrapper>
        <NavLink className={isPersonal ? '' : 'active'} to="/projects/professional">Professional</NavLink>
        <NavLink className={isPersonal ? 'active' : ''} to="/projects/personal">Personal</NavLink>
      </NavWrapper>
      { isPersonal ? <Personal /> : <Professional /> }
    </div>
  )
}

export default Projects
