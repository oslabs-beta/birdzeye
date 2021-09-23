module.exports = {
    pluginOptions: {
      electronBuilder: {
        preload: 'public/preload.js',
        // nodeIntegration: true,
        // nodeIntegration is causing issues, temporarily commented out
        externals:['node-pty'],
      }
    }
  }