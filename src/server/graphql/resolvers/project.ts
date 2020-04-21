import { find } from 'lodash';
import { getId } from '../../utils/get-id';
import { StaticProject, staticProjects } from '../constants/projects';
import { Skill, skills } from './skill';

export interface Project {
  id: string;
  title: string;
}

export interface ProjectQueryVars {
  id: string;
}

export const projects: Project[] = new Array(...staticProjects).map(
  (p: StaticProject, i: number) => {
    return {
      id: getId(p.title),
      title: p.title,
    };
  }
);

export const Query = {
  project: (_: null, { id }: ProjectQueryVars): Project | undefined =>
    find(projects, { id }),
  projects: (): Project[] => projects,
};

export const Fields = {
  skills: (project: Project): Skill[] | [] => {
    const targetProject = staticProjects.find(
      (sp) => getId(sp.title) === getId(project.title)
    );
    if (targetProject) {
      return targetProject.skills
        .map((skill: string): Skill | undefined =>
          skills.find((s: Skill) => s.id === getId(skill))
        )
        .filter((sk: Skill | undefined): sk is Skill => sk !== undefined);
    }
    return [];
  },
};
