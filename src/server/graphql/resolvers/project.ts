import { ValidationError } from 'apollo-server-express';
import { getId } from '../../utils/get-id';
import { getSlug } from '../../utils/get-slug';
import { StaticProject, staticProjects } from '../constants/projects';
import { Skill, skills } from './skill';

export interface Project {
  id: string;
  title: string;
  slug: string;
}

export interface ProjectQueryVars {
  id?: string;
  slug?: string;
}

export const projects: Project[] = new Array(...staticProjects).map(
  (p: StaticProject, i: number) => {
    return {
      id: getId(p.title),
      slug: getSlug(p.title),
      title: p.title,
    };
  }
);

export const Query = {
  project: (_: null, { id, slug }: ProjectQueryVars): Project | undefined => {
    if (!id && !slug) {
      throw new ValidationError('id or slug must be defined in the params');
    }
    return projects.find((p) => p.id === id || p.slug === slug);
  },
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
