import { TAppEnv } from '../../../typings/TAppEnv';
import { envVar } from '../utils/env';

export const ROOT_URL: string = 'https://alex-lanzoni-portfolio.herokuapp.com';
export const APP_ENV = envVar<TAppEnv>('APP_ENV');
