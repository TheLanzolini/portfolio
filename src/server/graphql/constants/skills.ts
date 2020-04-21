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
    description: `
      Lorem Ipsum Dolor Sit Amet
    `,
    experience: EXPERIENCE.FAMILIAR,
    title: 'Clojure',
  },
];
