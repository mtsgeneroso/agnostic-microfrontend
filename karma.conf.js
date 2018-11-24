module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      './src/**/*.spec.js'
    ]
  });
};