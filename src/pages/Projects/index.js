import React from 'react'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Split from 'common/Split'

const Professional = () => <Split load={import('./Professional')} />
const Personal = () => <Split load={import('./Personal')} />

const Projects = (props) => {
  const isPersonal = (!!props.match.params && !!props.match.params.type && props.match.params.type === 'personal')
  return (
    <div>
      <Helmet>
        <title>{isPersonal ? 'Personal Projects' : 'Professional Projects'}</title>
      </Helmet>
      Projects
      <NavLink style={{ color: 'black' }} to="/projects/professional">prof</NavLink>
      <NavLink style={{ color: 'black' }} to="/projects/personal">personal</NavLink>
      { isPersonal ? <Personal /> : <Professional /> }
    </div>
  )
}

export default Projects
