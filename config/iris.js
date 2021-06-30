const irisConfig = require('../iris.config');
const _ = require('lodash');

const defaultConfig = {
  proxy: {},
  define: {},
  shouldUseSourceMap: true,
  codeSplitting: false,
  shouldInlineRuntimeChunk: false
};

module.exports = _.merge(defaultConfig, irisConfig);
