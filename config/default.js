module.exports = {
  entry: {
    'main': './src/index.js'
  },
  output: {
    library: 'agMicroFrontend',
    libraryTarget: 'umd'
  },
  modules: {
    rules: [
      {
        test: /\.spec\.jsx?$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        },
        enforce: 'post',
        exclude: /node_modules|\.spec\.js$/,
      }
    ]
  }
}