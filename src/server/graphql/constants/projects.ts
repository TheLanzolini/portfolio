export interface StaticProject {
  title: string;
  skills: string[];
}

export const staticProjects: StaticProject[] = [
  {
    skills: ['React SSR', 'JavaScript', 'GraphQL', 'CSS-in-JS'],
    title: 'Starcity.com',
  },
  {
    skills: [
      'React',
      'Redux',
      'CSS-in-JS',
      'JavaScript',
      'GraphQL',
      'Single Page Apps',
      'Webpack',
    ],
    title: 'Starcity Hall',
  },
  {
    skills: ['PHP', 'Wordpress', 'CSS', 'HTML', 'JavaScript'],
    title: 'Starcity Wordpress CMS',
  },
  { title: 'Starcity Dashboard', skills: ['Clojure'] },
];
