'use strict';

const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const LoadableWebpackPlugin = require('@loadable/webpack-plugin');
const LoadableBabelPlugin = require('@loadable/babel-plugin');

const filename = path.resolve(__dirname, 'build');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    plugins: [LoadableBabelPlugin],
  },
};

module.exports = {
  // plugins: ['typescript'],
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
          optimization:
            target === 'web'
              ? {
                  ...config.optimization,
                  runtimeChunk: true,
                  splitChunks: {
                    chunks: 'all',
                    name: dev,
                  },
                }
              : config.optimization,
          plugins,
          module: {
            ...config.module,
            rules: [
              ...config.module.rules,
              {
                test: /.ts(x?)$/,
                use: [
                  ...(target === 'web' ? [babelLoader] : []),
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
  // modifyBabelOptions: (options) => {
  //   console.log('I AM HEREEEEE', options);
  //   return {
  //     ...options,
  //     babelrc: false,
  //     plugins: [LoadableBabelPlugin],
  //   };
  // },
};
