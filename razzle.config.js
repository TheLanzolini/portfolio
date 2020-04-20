'use strict';

const path = require('path');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const LoadableWebpackPlugin = require('@loadable/webpack-plugin');
const LoadableBabelPlugin = require('@loadable/babel-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const { ANALYZE } = process.env;

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
            ...(ANALYZE ? [new BundleAnalyzerPlugin()] : []),
          ]
        : config.plugins;
    const resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'styled-components': path.resolve(
          __dirname,
          'node_modules',
          'styled-components'
        ),
      },
    };

    const optimization =
      target === 'web'
        ? {
            ...config.optimization,
            runtimeChunk: true,
            splitChunks: {
              chunks: 'all',
              name: dev,
            },
          }
        : config.optimization;

    return dev
      ? {
          ...config,
          plugins,
          resolve,
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
          resolve,
          plugins,
          optimization,
        };
  },
  modifyBabelOptions: (options) => ({
    ...options,
    babelrc: false,
    plugins: [LoadableBabelPlugin],
  }),
};
