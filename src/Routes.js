import React from 'react'
import App from './App'
import Home from 'pages/Home'
import Split from 'common/Split'

// CODE SPLITTING!!
const About = () => (<Split load={import('pages/About')} />)
const Contact = () => (<Split load={import('pages/Contact')} />)

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: Home,
      },
      { path: '/about',
        component: About,
      },
      { path: '/contact',
        component: Contact,
      },
      { path: '/home',
        component: Home,
      },
    ],
  },
]

export default routes
