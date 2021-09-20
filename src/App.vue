<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  
  <DirectoryContainer></DirectoryContainer>
  <div>
    <TheSimulatorContainer />
    <TheComponentTreeContainer />
    <TheTabContainer />
    <TheTerminalTextEditorContainer />
  </div>
</template>

<script>

import DirectoryContainer from "./components/directory/DirectoryContainer.vue";
import TheSimulatorContainer from "./components/simulator/TheSimulatorContainer.vue";
import TheComponentTreeContainer from "./components/componentTree/TheComponentTreeContainer.vue";
import TheTabContainer from './components/tab/TheTabContainer.vue';
import TheTerminalTextEditorContainer from "./components/terminalTextEditor/TheTerminalTextEditorContainer.vue";

export default {
  name: "App",

  components: {
    DirectoryContainer,
    TheSimulatorContainer,
    TheTabContainer,
    TheTerminalTextEditorContainer,
    // TextEditorContainer,
    TheComponentTreeContainer,
    // TerminalContainer,
    // SimulatorContainer,
    // TabContainer
  },
  methods: {
    getDirectories(path) {
      // ask backend to read file
      const payload = { path };
      window.ipc.send("READ_FILE", payload);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: 'yellow';
  margin: '20px';
}
</style>
