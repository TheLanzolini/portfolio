import slugify from 'slugify';

export const getSlug = (str: string) =>
  slugify(str, { replacement: '-', lower: true, remove: /[*+~.()'"!:@ ]/g });
