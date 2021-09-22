"use strict";

import { app, protocol, BrowserWindow, dialog } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import installExtension, { VUEJS3_DEVTOOLS } from "electron-devtools-installer";
const isDevelopment = process.env.NODE_ENV !== "production";
//added by BMB
const path = require("path");
const { ipcMain } = require("electron");
const fs = require("fs");
const { exec } = require("child_process");

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]);

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1200,
    height: 1000,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      contextIsolation: !process.env.ELECTRON_NODE_INTEGRATION,
      // contextIsolation: true,
      //added by BMB
      preload: path.join(__static, "preload.js"),
      enableRemoteModule: true,
      sandbox: true,
      // // __static is set by webpack and will point to the public directory
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

app.allowRendererProcessReuse = false;

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

ipcMain.on("READ_DIRECTORY", (event, payload) => {
  const contentFiles = [];
  let grabFiles = fs.readdirSync(path.resolve("/", payload.path), {
    withFileTypes: true,
  });
  for (let fileObj of grabFiles) {
    if (fileObj.name[0] === ".") {
      continue;
    } else {
      const filePath = payload.path + fileObj.name;
      if (fs.lstatSync(filePath).isDirectory()) {
        contentFiles.push(fileObj.name);
      }
    }
    event.reply("READ_DIRECTORY", { contentFiles });
  }
});

ipcMain.on("READ_FILE", (event, payload) => {
  const contentFiles = [];
  let grabFiles = fs.readdirSync(path.resolve("/", payload.path), {
    withFileTypes: true,
  });
  for (let fileObj of grabFiles) {
    if (fileObj.name[0] !== ".") {
      //add the parent path to the name of the file so that lstat can find the file
      const filePath = payload.path + fileObj.name;
      if (fs.lstatSync(filePath).isFile()) {
        contentFiles.push(fileObj.name);
      }
    }
    event.reply("READ_FILE", { contentFiles });
  }
});

ipcMain.on("READ_SUBDIRECTORY", (event, payload) => {
  const contentFiles = [];
  const rootDirectoryName = payload.path;
  let grabFiles = fs.readdirSync(path.resolve("/", rootDirectoryName), {
    withFileTypes: true,
  });
  for (let fileObj of grabFiles) {
    let filePath = rootDirectoryName + "/" + fileObj.name;
    if (fs.lstatSync(filePath).isDirectory()) {
      contentFiles.push(fileObj.name);
    }
  }
  event.reply("READ_SUBDIRECTORY", { contentFiles, rootDirectoryName });
});

ipcMain.on("READ_SUBFILE", (event, payload) => {
  const contentFiles = [];
  const rootFileName = payload.path;
  let grabFiles = fs.readdirSync(path.resolve("/", rootFileName), {
    withFileTypes: true,
  });
  for (let fileObj of grabFiles) {
    let filePath = rootFileName + "/" + fileObj.name;
    if (fs.lstatSync(filePath).isFile()) {
      contentFiles.push(fileObj.name);
    }
  }

  event.reply("READ_SUBFILE", { contentFiles, rootFileName });
});

ipcMain.on("RUN_COMMAND", (event, payload) => {
  let commandResponse;
  exec(payload.command, { cwd: payload.root }, (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      commandResponse = error;
      event.reply("RUN_COMMAND", { commandResponse });
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      commandResponse = stderr;
      event.reply("RUN_COMMAND", { commandResponse });
      return;
    }
    console.log(`stdout: ${stdout}`);
    commandResponse = stdout;
    event.reply("RUN_COMMAND", { commandResponse });
  });
});

//******* get CONTENTS of file to display in text editor **********
ipcMain.on("READ_FILECONTENTS", (event, payload) => {
  // encoding utf8 makes files contents a string
  let grabFiles = fs.readFileSync(payload.path, { encoding: "utf8" });
  //send file contents to frontend
  event.reply("READ_FILECONTENTS", { grabFiles });
});

//************** Open dialog box to select project directory ****************/
ipcMain.on("OPEN_FILE_DIALOG", (event) => {
  // Use Electron dialog box to get file path to serve as root
  const dir = dialog.showOpenDialogSync({
    title: "Open a Project",
    buttonLabel: "Choose",
    properties: ["createDirectory", "promptToCreate", "openDirectory"],
  });
  // User can press cancel instead of choosing a directory, so dir could be an empty array
  if (dir && dir[0]) {
    const rootDir = dir[0];
    event.reply("OPEN_FILE_DIALOG", { rootDir });
  } else {
    event.reply("OPEN_FILE_DIALOG", {});
  }
});

ipcMain.on("WRITE_FILE", (event, [payload, content]) => {
  fs.writeFileSync(payload, content);
  // send response to frontend
  event.reply("WRITE_FILE", "Saved!");
});

//************** Get path for component tree ****************/
ipcMain.on("GET_APP_PATH", (event) => {
  // Use Electron dialog box to get file path to serve as root
  const appFilePath = dialog.showOpenDialogSync({
    title: "Select TOP LEVEL App Component",
    buttonLabel: "Choose",
    properties: ["openFile"],
  });
  // User can press cancel instead of choosing a directory, so dir could be an empty array
  if (appFilePath && appFilePath[0]) {
    const path = appFilePath[0];
    event.reply("GET_APP_PATH", { path });
  } else {
    event.reply("GET_APP_PATH", {});
  }
});
