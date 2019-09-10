let { entry, output, modules } = require('./default');

module.exports = {
  entry,
  mode: 'development',
  output: {
    filename: '[name].js',
    ...output
  },
  module: modules
};