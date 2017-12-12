import React from 'react'
import App from './App'
import Home from 'pages/Home'
import Split from 'common/Split'

import Projects from 'pages/Projects'

// CODE SPLITTING!!
const About = () => (<Split load={import('pages/About')} />)
const Contact = () => (<Split load={import('pages/Contact')} />)
if (process.browser) {
  window.h = Home
  // const promises = []
  // var q = new h.props.children[6].props.children.type()
  // if (h.props && h.props.children && Array.isArray(h.props.children)) {
  //   h.props.children.forEach(child => {
  //     if (child.props && child.props.children && child.props.children.type && typeof(child.props.children.type) === 'function') {
  //       const a = new child.props.children.type()
  //       if (a && a.dataCall && a.dataCall.then) {
  //         promises.push(a.dataCall)
  //       }
  //     }
  //   })
  // }
  // Promise.all(promises).then(console.log)
}

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
      { path: '/projects',
        exact: true,
        component: Projects,
      },
      { path: '/projects/:type',
        component: Projects,
      },
    ],
  },
]

export default routes
