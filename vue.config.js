// const path = require('path');

module.exports = {
    pluginOptions: {
      electronBuilder: {
        preload: 'public/preload.js',
        // nodeIntegration: true,
        // nodeIntegration is causing issues, temporarily commented out
        externals:['node-pty'],
        // enableRemoteModule: false,
        // sandbox: true,
      // __static is set by webpack and will point to the public directory
        // preload: path.resolve(__static, "preload.js"),
        // preload: path.join(__dirname, '/public/preload.js'),
      }
    }
  }