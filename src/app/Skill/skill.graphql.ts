import gql from 'graphql-tag';

interface ProjectDatum {
  id: string;
  title: string;
  slug: string;
}

interface SkillDatum {
  id: string;
  title: string;
  description: string;
  projects: ProjectDatum[];
}

export interface SkillData {
  skill: SkillDatum;
}

export interface SkillQueryVars {
  slug: string;
}

export const SKILL_QUERY = gql`
  query SkillQuery($slug: String!) {
    skill(slug: $slug) {
      id
      title
      description
      projects {
        id
        title
        slug
      }
    }
  }
`;
