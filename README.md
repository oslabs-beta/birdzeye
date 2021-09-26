<p align="center">
 <img src="https://github.com/oslabs-beta/vuety/raw/dev/src/assets/birdzeye.png" alt="BIRDZ'EYE logo">
</p>
<h4 align="right" font-weight="400">Logo by Natsuki Wada</h4>
<h2 align="center">BIRDZ'EYE</h2>

<div align="center">
</div>

---

<h4 align="center"> Dedicated Vue IDE built to streamline your development process 
    <br> 
    <br>
</h4>

<!-- ABOUT THE PROJECT -->

## Table of Contents

- [About The Project](#about-the-project)
- [Getting Started](#getting-started)
- [Using App](#using-app)
- [Planned Features](#planned-features)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [Contributors](#contributors)

## About The Project

### Built With

- [Vue / Vue-CLI](https://vuejs.org/)
- [Vuex](https://next.vuex.vuejs.org/)
- [Electron](https://www.electronjs.org/docs)
- [Node child_process](https://nodejs.org/api/child_process.html)
- [Codemirror](https://codemirror.net/)
- [XTerm](https://xtermjs.org/)
- [Node-pty](https://github.com/microsoft/node-pty)
- [Material Design](https://material.io/design)

## Getting Started

1. Fork this repository and clone it to your local machine.
2. Run "npm install".
   ```
     npm install
   ```
3. In the BIRDZ'EYE "/src/components/componentTree/TheComponentTreeContainer.vue" file, add the file path that leads to the root component for your project in the import statement with an empty string:

   ```
   import AppChildComponent from "./AppChildComponent.vue";
   //**** Modify empty string on next line to import from the location of the root component in your applications (typically App.vue) *****/
   import App from "";
   ```

4)  Run "npm run electron:serve" for development mode,

    ```
    npm run electron:serve
    ```

    Or run "npm run electron:build" to create a production build of the BIRDZ'EYE application

    ```
    npm run electron:build
    ```

## Using the App

1.  When the application opens, you will see the words, "Open Project". Click on this to choose the root directory for your project. After choosing the root directory, the main page of the app, with the text editor, file tree, component tree, and simulator will appear. (The simulator will initially just be the BIRDZ'EYE logo.)

2.  In order to initiate the text editor, click on a file in the file tree, and then click the circular arrow button on the right side of the screen. The file contents will appear on the bottom of the screen.

3.  The two-way arrow button toggles between the text editor and the terminal. You can use the terminal to run the command you need to start your application's local server. After typing in the command, click the running person icon to run the command.

4.  Once you've started up your server, you can enter a port number in the text field on the left. You only need to enter the number, the "http://localhost:" will be entered automatically. After doing this, your application should replace the BIRDZ'EYE logo.

5.  You can save edits to your file in the text editor either by using the down arrow button on the right, or by using "control + s".

6.  You can view component properties by clicking on the component's name in the component tree.

## Planned Features

1.  More robust and flexible terminal functionality. Including integrating XTerm into the application's terminal.

2.  Dynamic tab creation for the text editor.

3.  Interface/UI improvements.

4.  Dynamic file tree with read/write capabilities in order to create and edit files.

5.  Live styling capability in the component tree display for editing components.

6.  Refinement of Vuex state management.

<!-- CONTRIBUTING -->

## Contributing

Collaboration is what drives Open Source technology forward. We welcome any contributions you would like to make. **Thank you**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/nameOfYourFeature`)
3. Commit your Changes (`git commit -m 'Some explanation of what you added'`)
4. Push to the Branch (`git push origin feature/nameOfYourFeature`)
5. Open a Pull Request

## Acknowledgements

- We would like to thank OSLabs for accelerating this project.

## Contributors

Natsuki Wada <br />
[LinkedIn](https://www.linkedin.com/in/natsukiwada/) | [Github](https://github.com/wachka06)

Graham Pierce <br />
[LinkedIn](https://www.linkedin.com/in/graham-a-pierce/) | [Github](https://github.com/Takodakko)

Brandon Bowers <br />
[LinkedIn](https://www.linkedin.com/in/brandon-michael-bowers/) | [Github](https://github.com/Brandon-Bowers)
