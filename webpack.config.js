const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

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
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.vue' ],
    alias: {
        'vue': '@vue/runtime-dom'
    }
  },
  // need the research for codemirror plugin! 
  plugins: [
    new VueLoaderPlugin()
  ],
  devServer: {
    // hot: true,
    // publicPath: '/build',
    static: path.join(__dirname, 'renderer'),
    port: 8080
  }
}