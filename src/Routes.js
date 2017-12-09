import React from 'react'
import App from './App'
import Home from 'pages/Home'
import Split from 'common/Split'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

// CODE SPLITTING!!
// const About = () => (<Split load={import('pages/About')} />)
const Contact = () => (<Split load={import('pages/Contact')} />)
const Professional = (title) => (<Split title={title} load={import('pages/Projects')} />)
const Personal = () => (<div>personal</div>)
const Projects = (props) => {
  console.log(props)
  return (
    <div>
      Projects
      <NavLink style={{ color: 'black' }} to="/projects/professional">prof</NavLink>
      <NavLink style={{ color: 'black' }} to="/projects/personal">personal</NavLink>
      { (props.type || props.match.params.type) == 'professional' ? <Professional /> : <Personal /> }
    </div>
  )
}

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: Home,
      },
      // { path: '/about',
      //   component: About,
      // },
      { path: '/contact',
        component: Contact,
      },
      { path: '/home',
        component: Home,
      },
      { path: '/projects',
        exact: true,
        component: (props) => (<Projects title={'asd'} type={'professional'} {...props} />),
      },
      { path: '/projects/:type',
        component: (props) => (<Projects title={'asd'} {...props} />),
      },
    ],
  },
]

export default routes
