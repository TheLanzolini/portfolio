import { ValidationError } from 'apollo-server-express';
import { getId } from '../../utils/get-id';
import { getSlug } from '../../utils/get-slug';
import { StaticProject, staticProjects } from '../constants/projects';
import { EXPERIENCE, StaticSkill, staticSkills } from '../constants/skills';
import { Project } from './project';

export interface Skill extends StaticSkill {
  id: string;
  slug: string;
}

export interface SkillsQueryVars {
  id?: string;
  experience?: EXPERIENCE;
}

export interface SkillQueryVars {
  id?: string;
  slug?: string;
}

export const skills: Skill[] = new Array(...staticSkills).map(
  ({ title, description, experience }: StaticSkill): Skill => ({
    description,
    experience,
    id: getId(title),
    slug: getSlug(title),
    title,
  })
);

export const Query = {
  skill: (_: null, { id, slug }: SkillQueryVars): Skill | undefined => {
    if (!id && !slug) {
      throw new ValidationError('id or slug must be defined in the params');
    }
    return skills.find((s) => s.id === id || s.slug === slug);
  },
  skills: (_: null, { id, experience }: SkillsQueryVars): Skill[] => {
    if (id) {
      const targetSkill = skills.find((s) => s.id === id);
      return targetSkill ? [targetSkill] : [];
    }
    if (experience) {
      return skills.filter((s) => s.experience === experience);
    }
    return skills;
  },
};

export const Fields = {
  projects: (skill: Skill): Project[] =>
    staticProjects
      .filter((p: StaticProject): boolean => p.skills.includes(skill.title))
      .map(
        ({ title }: StaticProject): Project => ({
          id: getId(title),
          slug: getSlug(title),
          title,
        })
      ),
};
