export enum EXPERIENCE {
  PROFICIENT = 'PROFICIENT',
  EXPERIENCED = 'EXPERIENCED',
  FAMILIAR = 'FAMILIAR',
}

export interface StaticSkill {
  title: string;
  description: string;
  experience: EXPERIENCE;
}

export const staticSkills: StaticSkill[] = [
  {
    description: `
    I have worked with JavaScript since the start of my career writing jQuery for wordpress sites and plugins. 
    During my time at SportsHub was when I first really dove deep into JavaScript. I self-taught myself how to use angular1.x
    and gulp.js, as well as learn design systems and scss. I became more interested in the front end build process and 
    have created many front end templates for my teams to use over the years. I learned Angular2+, TypeScript, NodeJS, 
    React, and redux before moving onto Starcity where I wrote many services and apps using JavaScript and lead teams of
    JavaScript engineers. 
    `,
    experience: EXPERIENCE.PROFICIENT,
    title: 'JavaScript',
  },
  {
    description: `
      Lorem Ipsum Dolor Sit Amet
    `,
    experience: EXPERIENCE.PROFICIENT,
    title: 'CSS',
  },
  {
    description: `
      Lorem Ipsum Dolor Sit Amet
    `,
    experience: EXPERIENCE.EXPERIENCED,
    title: 'GraphQL',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'React',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'React SSR',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'Redux',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'NodeJS',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'HTML',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'TypeScript',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'Angular 1.x',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'Angular 2',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'express',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'Git',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'SASS',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'CSS-in-JS',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'Webpack',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'PHP',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'Wordpress',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.PROFICIENT,
    title: 'CircleCI',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'PSQL',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'NextJS',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'Cloudfront',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'S3',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'Cloudwatch',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'Lambda',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'SEO',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'AGILE workflow',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'JIRA',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'Prisma',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'HTML5 Canvas',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'Gulp',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'Shell',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'Single Page Apps',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'Mac OSX',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'Windows',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'Adobe CC',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'Heroku',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.EXPERIENCED,
    title: 'Cloudinary',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.FAMILIAR,
    title: 'Linux(Ubuntu/Arch)',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.FAMILIAR,
    title: 'Clojure',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.FAMILIAR,
    title: 'Ruby on Rails',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.FAMILIAR,
    title: 'Ruby',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.FAMILIAR,
    title: 'Ionic',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.FAMILIAR,
    title: 'Cordova',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.FAMILIAR,
    title: 'Electron',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.FAMILIAR,
    title: 'Jenkins',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.FAMILIAR,
    title: 'Docker',
  },
  {
    description: 'Lorem Ipsum',
    experience: EXPERIENCE.FAMILIAR,
    title: 'VM software',
  },
];
