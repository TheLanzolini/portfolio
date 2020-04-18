'use strict';

const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const LoadableWebpackPlugin = require('@loadable/webpack-plugin');
const LoadableBabelPlugin = require('@loadable/babel-plugin');

const filename = path.resolve(__dirname, 'build');

module.exports = {
  plugins: [
    {
      name: 'typescript',
      options: {
        useBabel: true,
      },
    },
  ],
  modify: (config, { dev, target }) => {
    const plugins =
      target === 'web'
        ? [
            ...config.plugins,
            new LoadableWebpackPlugin({
              outputAsset: false,
              writeToDisk: { filename },
            }),
          ]
        : config.plugins;
    return dev
      ? {
          ...config,
          optimization: config.optimization,
          plugins,
          module: {
            ...config.module,
            rules: [
              ...config.module.rules,
              {
                test: /.ts(x?)$/,
                use: [
                  {
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
            ],
          },
        }
      : {
          ...config,
          plugins,
        };
  },
  modifyBabelOptions: (options) => ({
    ...options,
    babelrc: false,
    plugins: [LoadableBabelPlugin],
  }),
};
