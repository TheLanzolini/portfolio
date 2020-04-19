export {};

import { TAppEnv } from './TAppEnv';

interface IWindowEnv {
  APP_ENV: string;
}

declare global {
  namespace NodeJS {
    interface Process {
      browser?: boolean;
      APP_ENV: TAppEnv;
    }
  }

  interface Window {
    env: IWindowEnv;
    __APOLLO_STATE__: any;
    __REDUX_STATE__: any;
  }
}
