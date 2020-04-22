import { getId } from '../../utils/get-id';
import { getSlug } from '../../utils/get-slug';
import { StaticProject, staticProjects } from '../constants/projects';
import { EXPERIENCE, StaticSkill, staticSkills } from '../constants/skills';
import { Project } from './project';

export interface Skill extends StaticSkill {
  id: string;
}

export interface SkillsQueryVars {
  id?: string;
  experience?: EXPERIENCE;
}

export interface SkillQueryVars {
  id: string;
}

export const skills: Skill[] = new Array(...staticSkills).map(
  ({ title, description, experience }: StaticSkill): Skill => ({
    description,
    experience,
    id: getId(title),
    title,
  })
);

export const Query = {
  skill: (_: null, { id }: SkillQueryVars): Skill | undefined =>
    skills.find((s) => s.id === id),
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
