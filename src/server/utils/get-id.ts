import crypto from 'crypto';

export const getId = (n: any): string =>
  crypto.createHash('md5').update(n).digest('hex');
