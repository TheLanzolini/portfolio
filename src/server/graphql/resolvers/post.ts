import { find } from 'lodash';
import { Author, authors } from './author';

export interface PostQueryVars {
  id: number;
}

export interface Post {
  id: number;
  title: string;
  authorId: number;
  votes: number;
}

export interface UpvotePostMutationVars {
  postId: number;
}

export const posts: Post[] = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
  { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3 },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
  { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7 },
];

export const Query = {
  post: (parent: null, { id }: PostQueryVars): Post | undefined =>
    find(posts, { id }),
  posts: () => posts,
};

export const Fields = {
  author: (post: Post): Author | undefined =>
    find(authors, { id: post.authorId }),
};

export const Mutation = {
  upvotePost: (_: any, { postId }: UpvotePostMutationVars) => {
    const p = find(posts, { id: postId });
    if (!p) {
      throw new Error(`Couldn't find post with id ${postId}`);
    }
    p.votes += 1;
    return p;
  },
};
