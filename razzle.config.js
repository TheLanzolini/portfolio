'use strict';
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  plugins: ['typescript'],
  modify: (config, { dev, target }) =>
    !dev
      ? config
      : {
          ...config,
          module: {
            ...config.module,
            rules: [
              ...config.module.rules,
              {
                test: /.tsx?$/,
                loader: 'ts-loader',
                options: {
                  transpileOnly: true,
                  experimentalWatchApi: true,
                  getCustomTransformers: () => ({
                    before: [styledComponentsTransformer],
                  }),
                },
              },
            ],
          },
        },
};
