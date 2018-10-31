let { entry } = require('./default');
let production = {
  entry,
  mode: 'production',
  output: {
    filename: '[name].min.js'
  }
}

module.exports = production;