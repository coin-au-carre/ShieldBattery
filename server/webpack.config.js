require('@babel/register')
const makeConfig = require('../common.webpack.config.js').default
const path = require('path')

const TARGET_BROWSERS = 'last 2 versions, not dead, not ie 11, not ie_mob 11, not op_mini all'

const webpackOpts = {
  // Relative to the root directory
  name: 'server',
  entry: {
    client: './client/index.jsx',
  },
  output: {
    chunkFilename: '[name].chunk.js',
    filename: '[name].js',
    path: path.join(__dirname, 'public', 'scripts'),
    publicPath: '/scripts/',
  },
  plugins: [],
}

if (process.env.NODE_ENV !== 'production') {
  webpackOpts.entry.hotClient = 'webpack-hot-middlware/client'
}

const babelOpts = {
  babelrc: false,
  // This makes babel-loader cache-bust if the NODE_ENV changes, which is what we want here, since
  // the BABEL_ENV has been set specifically for our builder's babel-register usage.
  envName: process.env.NODE_ENV,
  cacheDirectory: true,
  // Note that these need to be installed in the root package.json, not the server one
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: { browsers: TARGET_BROWSERS },
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
  plugins: [
    ['babel-plugin-styled-components'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-function-bind'],
    ['react-hot-loader/babel'],
  ],
}

module.exports = makeConfig({
  webpack: webpackOpts,
  babel: babelOpts,
  globalDefines: {
    IS_ELECTRON: false,
  },
})
