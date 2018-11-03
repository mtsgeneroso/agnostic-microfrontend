let { entry, output, modules } = require('./default');

module.exports = env => {
  return {
    entry,
    mode: env,
    output: {
      filename: '[name].js',
      ...output
    },
    module: modules
  }
};