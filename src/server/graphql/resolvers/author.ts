import { filter, find } from 'lodash';
import { Post, posts } from './post';

export interface AuthorQueryVars {
  id: number;
}

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
}

export const authors: Author[] = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov' },
];

export const Query = {
  author: (parent: null, { id }: AuthorQueryVars): Author | undefined =>
    find(authors, { id }),
};

export const Fields = {
  posts: (author: Author): Post[] | undefined =>
    filter(posts, { authorId: author.id }),
};
