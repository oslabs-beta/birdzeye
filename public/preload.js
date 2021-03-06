const { contextBridge, ipcRenderer } = require("electron");

const validChannels = [
  "READ_FILE",
  "READ_DIRECTORY",
  "READ_SUBFILE",
  "READ_SUBDIRECTORY",
  "WRITE_FILE",
  "RUN_COMMAND",
  "READ_FILECONTENTS",
  "OPEN_FILE_DIALOG",
  "GET_APP_PATH",
];

contextBridge.exposeInMainWorld("ipc", {
  send: (channel, data) => {
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  on: (channel, func) => {
    if (validChannels.includes(channel)) {
      // Strip event as it includes `sender` and is a security risk
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
});
