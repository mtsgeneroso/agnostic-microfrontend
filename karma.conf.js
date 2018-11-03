module.exports = function (config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      './src/**/*.spec.js'
    ],
    browsers: ["ChromeNoSandbox"],
    singleRun: true,
    reporters: ['progress', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: ['text-summary'],
      fixWebpackSourcePaths: true
    }
  });
};