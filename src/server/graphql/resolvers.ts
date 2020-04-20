import * as author from './resolvers/author';
import * as post from './resolvers/post';
import * as project from './resolvers/project';

const resolvers = {
  Author: author.Fields,
  Query: {
    ...author.Query,
    ...project.Query,
    ...post.Query,
  },

  Mutation: {
    ...post.Mutation,
  },

  Post: post.Fields,
};

export { resolvers };
