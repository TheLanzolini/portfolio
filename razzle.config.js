'use strict';
const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const { stringReplaceLoaderOptions } = require('universal-async-component');

module.exports = {
  plugins: ['typescript'],
  modify: (config, { dev, target }) => {
    const plugins = [
      ...config.plugins,
      ...(target === 'web'
        ? [
            new StatsWriterPlugin({
              filename: 'client-stats.json',
              fields: ['chunks', 'publicPath', 'assets'],
            }),
          ]
        : []),
    ];
    const optimization = {
      ...config.optimization,
      runtimeChunk: true,
      splitChunks: {
        chunks: 'all',
        name: dev,
      },
    };
    const rules = [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'string-replace-loader',
            options: stringReplaceLoaderOptions,
          },
        ],
      },
    ];
    return !dev
      ? {
          ...config,
          plugins,
          module: {
            ...config.module,
            rules: [...config.module.rules, ...rules],
          },
        }
      : {
          ...config,
          plugins,
          module: {
            ...config.module,
            rules: [
              ...config.module.rules,
              ...rules,
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
        };
  },
};
