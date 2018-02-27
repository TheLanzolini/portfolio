import AsyncComponent from 'common/AsyncComponent'

export const Home = AsyncComponent('Home', () => import('pages/Home'))
export const About = AsyncComponent('About', () => import('pages/About'))
export const Group = AsyncComponent('Group', () => import('pages/Group'))
export const Groups = AsyncComponent('Groups', () => import('pages/Groups'))
