import App from '../App.js'

import { Home, About, Contact, Projects } from './sync'

const routes = [
  { component: App,
    routes: [
      { path: '/',
        exact: true,
        component: Home,
      },
      { path: '/home',
        component: Home,
      },
      { path: '/about',
        component: About,
      },
      { path: '/contact',
        component: Contact,
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
