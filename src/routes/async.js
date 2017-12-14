import AsyncComponent from 'common/AsyncComponent'

export const Home = AsyncComponent('Home', () => import('pages/Home'))
export const About = AsyncComponent('About', () => import('pages/About'))
export const Contact = AsyncComponent('Contact', () => import('pages/Contact'))
export const Projects = AsyncComponent('Projects', () => import('pages/Projects'))
