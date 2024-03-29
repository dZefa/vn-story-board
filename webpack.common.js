const webpack = require('webpack');
const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractCSSPlugin = require('mini-css-extract-plugin');

const APP_DIR = path.resolve(__dirname, './src/index.tsx');
const BUILD_DIR = path.resolve(__dirname, './build');
const TEMPLATE_DIR = path.resolve(__dirname, './src/template.index.html');

module.exports = {
  entry: {
    app: APP_DIR,
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: [
      '.ts', '.tsx', '.js', '.json'
    ],
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [
                ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css'}]
              ]
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanPlugin(['build']),
    new ExtractCSSPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HTMLPlugin({
      template: TEMPLATE_DIR,
      inject: true,
    })
  ]
};
