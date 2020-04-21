import * as project from './resolvers/project';
import * as skill from './resolvers/skill';

const resolvers = {
  Query: {
    ...project.Query,
    ...skill.Query,
  },

  // Mutation: {},

  Project: project.Fields,
  Skill: skill.Fields,
};

export { resolvers };
