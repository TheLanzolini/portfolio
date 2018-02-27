import App from '../App.js'

import { Home, About, Groups, Group } from './sync'
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
      { path: '/groups',
        exact: true,
        component: Groups,
      },
      { path: '/group/:slug',
        component: Group,
      },
      { path: '*',
        component: NotFound,
      },
    ],
  },
]

export default routes
