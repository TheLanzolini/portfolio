import App from '../App.js'

import { Home, About, Contact, Projects } from './sync'
import NotFound from 'pages/NotFound'

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
      { path: '*',
        component: NotFound,
      },
    ],
  },
]

export default routes
