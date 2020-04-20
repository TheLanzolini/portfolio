import crypto from 'crypto';
import { find } from 'lodash';

export interface Project {
  id: string;
  title: string;
}

export interface ProjectQueryVars {
  id: string;
}

interface StaticProject {
  title: string;
}

const staticProjects: StaticProject[] = [
  { title: 'Starcity.com' },
  { title: 'Starcity Hall' },
  { title: 'Starcity Prospect Service' },
  { title: 'Starcity.com WP CMS' },
];

const getId = (n: any): string =>
  crypto.createHash('md5').update(n).digest('hex');

const projects: Project[] = new Array(...staticProjects).map(
  (p: StaticProject, i: number) => {
    return {
      id: getId(p.title),
      title: p.title,
    };
  }
);

export const Query = {
  project: (parent: null, { id }: ProjectQueryVars): Project | undefined => {
    console.log(id);
    return find(projects, { id });
  },
  projects: (): Project[] => projects,
};

export const Fields = {};
