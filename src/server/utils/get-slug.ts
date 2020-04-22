import slugify from 'slugify';

slugify.extend({ '.': '-' });

export const getSlug = (str: string) =>
  slugify(str, { replacement: '-', lower: true, remove: /[*+~.()'"!:@]/g });
