const path = require('path');
// Codemirror Plugin

module.exports = {
  entry: './renderer/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  // // Compile for Electron for main process.
  // target: 'electron-main',
  // // configure whether to polyfill or mock certain Node.js globals
  // node: {
  //   __dirname: false,
  //   __filename: false
  // },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
      // js configuration ! 
      // {
      //   test: /\.js?$/,
      // }
      // vue configuration ! 
      // {

      // }
    ]
  },
  // need the research for codemirror plugin! 
  // plugins: [],
  devServer: {
    // hot: true,
    // publicPath: '/build',
    port: 8080
  }
}