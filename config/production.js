let { entry, output, modules } = require('./default');
module.exports = {
  entry,
  mode: 'production',
  output: {
    filename: '[name].min.js',
    ...output
  },
  module: modules
};