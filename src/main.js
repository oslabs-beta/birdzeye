import { createApp } from 'vue'
import App from './App.vue'
// import { ipcMain } from 'electron'
// App.allowRendererProcessReuse = false;
// const os = require('os');
// const pty = require('node-pty');
// const shell = os.platform() === 'win32' ? 'powershell.exe' : 'zsh';
// const ptyProcess = pty.spawn(shell, [], {
//     name: 'xterm-color',
//     cols: 80,
//     rows: 30,
//     cwd: process.env.HOME,
//     env: process.env
//   });
  
//   ptyProcess.onData('data', function(data) {
//     // process.stdout.write(data);
//     Window.webContent.send('terminal.incData', data);
//   });
//   ipcMain.on('terminal.toTerm', function(event, data) {
//     ptyProcess.write(data);
//   })
createApp(App).mount('#app')
