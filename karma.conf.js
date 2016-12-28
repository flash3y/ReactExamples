process.env.NODE_ENV = 'test';
require('dotenv').config({silent: true});
var webpackConfig = require('./node_modules/react-scripts/config/webpack.config.dev.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/js/foundation.min.js',
      'src/tests/**/*.test.jsx'
    ],
    preprocessors: {
      'src/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      captureConsole: true,
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
