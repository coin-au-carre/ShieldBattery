// Can't use ES6 imports in this file because this won't be running through Babel
require('babel-register')
const makeConfig = require('./common.webpack.config.js').default
const path = require('path')

const webpackOpts = {
  target: 'electron-renderer',
  entry: './client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'app', 'dist'),
    publicPath: 'http://localhost:5566/dist/',
    libraryTarget: 'commonjs2',
  },
}

const babelOpts = {
  babelrc: false,
  cacheDirectory: true,
  presets: [
    'react',
    [
      'env', {
        /*
          TODO(tec27): change this to the proper version (1.6 at this time) once babel-preset-env
          updates to include that version
        */
        targets: { electron: 1.5 },
        modules: false,
        useBuiltIns: true,
      },
    ],
    'stage-0',
  ],
  plugins: [
    'transform-decorators-legacy',
  ].concat(process.env.NODE_ENV !== 'production' ? [
    // Need these to work around an issue in react-transform/react-hot-loader:
    // https://github.com/gaearon/react-hot-loader/issues/313
    'transform-class-properties',
    'transform-es2015-classes',

    ['react-transform', {
      transforms: [{
        transform: 'react-transform-hmr',
        imports: ['react'],
        locals: ['module']
      }, {
        transform: 'react-transform-catch-errors',
        imports: ['react', 'redbox-react']
      }]
    }],
  ] : []),
}

// This option is probably *too* safe given that we're deploying this on Electron, but I don't think
// it changes much, so whatever
const cssNextOpts = { browsers: 'last 2 Chrome versions' }
const hotUrl = 'webpack-hot-middleware/client?path=http://localhost:5566/__webpack_hmr'

const SB_SERVER = (() => {
  if (process.env.SB_SERVER) {
    return process.env.SB_SERVER
  }
  if (process.env.NODE_ENV === 'production') {
    return 'https://shieldbattery.net'
  }
  try {
    const serverConfig = require('./server/config.js').default
    if (serverConfig.canonicalHost) {
      return serverConfig.canonicalHost
    }
  } catch (err) {
    // Intentionally empty, just means the server config isn't there/is broken for some reason
  }
  // Just use a "default" server address
  return 'http://localhost:5555'
})()

console.log('Using a server of ' + SB_SERVER + ' by default')

module.exports = makeConfig({
  webpack: webpackOpts,
  babel: babelOpts,
  cssNext: cssNextOpts,
  hotUrl,
  envDefines: {
    SB_ENV: JSON.stringify('electron'),
    SB_SERVER: SB_SERVER ? JSON.stringify(SB_SERVER) : undefined,
  },
  minify: false,
})
