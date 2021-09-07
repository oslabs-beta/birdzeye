<template>
<div>I'm a terminal!</div>
<div :id="terminal"></div>    
</template>

<script>
import { Terminal } from 'xterm';
const terminal = new Terminal();
// const os = require('os');
// const pty = require('node-pty');

// const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

// const ptyProcess = pty.spawn(shell, [], {
//   name: 'xterm-color',
//   cols: 80,
//   rows: 30,
//   cwd: process.env.HOME,
//   env: process.env
// });

// ptyProcess.on('data', function(data) {
//   process.stdout.write(data);
// });

// ptyProcess.write('ls\r');
// ptyProcess.resize(100, 40);
// ptyProcess.write('ls\r');
// terminal.open(document.getElementById('terminal'));
// terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
export default {
    data() {
        return {
          terminalDisplay: true,
        }

    },
    methods: {
        showTerminal() {
          if (this.terminalDisplay) {
            terminal.open('terminal');
            terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
          }
        }

    },
    computed: {
        
    }
    // mounted: {
      
    // }

}
</script>