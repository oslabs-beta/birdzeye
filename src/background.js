"use strict";

import { app, protocol, BrowserWindow } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS3_DEVTOOLS } from "electron-devtools-installer";
const isDevelopment = process.env.NODE_ENV !== "production";
//added by BMB
const path = require("path");
const { ipcMain } = require("electron");
const fs = require("fs");

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      //added by BMB
      enableRemoteModule: false,
      sandbox: true,
      // __static is set by webpack and will point to the public directory
      preload: path.resolve(__static, "preload.js"),
    },
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}

//Added by BMB
// ipcMain.on("READ_FILE", (event, payload) => {
//   const contentFiles = fs
//     .readdirSync(payload.path, { withFileTypes: true })
//     .filter((dirent) => fs.lstatSync(dirent.name).isFile())
//     .map((dirent) => dirent.name);
//   event.reply("READ_FILE", { contentFiles });
// });

ipcMain.on("READ_DIRECTORY", (event, payload) => {
  const contentFiles = [];
  let grabFiles = fs.readdirSync(payload.path, { withFileTypes: true });
  for (let fileObj of grabFiles) {
    if (fs.lstatSync(fileObj.name).isDirectory()) {
      contentFiles.push(fileObj.name);
    }
  }
  event.reply("READ_DIRECTORY", { contentFiles });
});

ipcMain.on("READ_FILE", (event, payload) => {
  const contentFiles = [];
  let grabFiles = fs.readdirSync(payload.path, { withFileTypes: true });
  for (let fileObj of grabFiles) {
    if (fs.lstatSync(fileObj.name).isFile()) {
      contentFiles.push(fileObj.name);
    }
  }
  event.reply("READ_FILE", { contentFiles });
});

ipcMain.on("READ_SUBDIRECTORY", (event, payload) => {
  const contentFiles = [];
  const rootDirectoryName = payload.path;
  console.log("payload.path: ", payload.path);
  let grabFiles = fs.readdirSync(rootDirectoryName, { withFileTypes: true });
  console.log("grabFiles", grabFiles);
  for (let fileObj of grabFiles) {
    console.log("fileObj", fileObj);
    let filePath = rootDirectoryName + "/" + fileObj.name;
    console.log("filePath", filePath);
    if (fs.lstatSync(filePath).isDirectory()) {
      contentFiles.push(fileObj.name);
      console.log("contentFiles", contentFiles);
    }
  }
  event.reply("READ_SUBDIRECTORY", { contentFiles, rootDirectoryName });
});

ipcMain.on("READ_SUBFILE", (event, payload) => {
  const contentFiles = [];
  const rootFileName = payload.path;
  // console.log("payload.path: ", payload.path);
  let grabFiles = fs.readdirSync(rootFileName, { withFileTypes: true });
  // console.log("grabFiles", grabFiles);
  for (let fileObj of grabFiles) {
    // console.log("fileObj", fileObj);
    let filePath = rootFileName + "/" + fileObj.name;
    // console.log("filePath", filePath);
    if (fs.lstatSync(filePath).isFile()) {
      contentFiles.push(fileObj.name);
    }
  }
  // console.log("contentFiles", contentFiles);
  event.reply("READ_SUBFILE", { contentFiles, rootFileName });
});
