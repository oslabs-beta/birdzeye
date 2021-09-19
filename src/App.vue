<template>
<div>
  <TheOpeningPage v-if="displayOpen" @close-open-page="switchToMain" />
  <div v-else>
    <img alt="Birdzeye logo" src="./assets/birdzeye.png" height="200" width="300"/>
    <DirectoryContainer></DirectoryContainer>
    <TheSimulatorContainer />
    <TheComponentTreeContainer />
    <TheTerminalTextEditorContainer />
  </div>
  </div>
</template>

<script>

import DirectoryContainer from "./components/directory/DirectoryContainer.vue";
import TheSimulatorContainer from "./components/simulator/TheSimulatorContainer.vue";
import TheTerminalTextEditorContainer from "./components/terminalTextEditor/TheTerminalTextEditorContainer.vue";
import TheComponentTreeContainer from "./components/componentTree/TheComponentTreeContainer.vue";
import TheOpeningPage from "./components/TheOpeningPage.vue";

export default {
  name: "App",
  
  data() {
    return {
      displayOpen: true,
    }
  },
  components: {
    DirectoryContainer,
    TheSimulatorContainer,
    TheTerminalTextEditorContainer,
    TheComponentTreeContainer,
    TheOpeningPage,
    // TabContainer
  },
  methods: {
    getDirectories(path) {
      // ask backend to read file
      const payload = { path };
      window.ipc.send("READ_FILE", payload);
    },
    switchToMain(closed) {
      this.displayOpen = closed;
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
}
</style>
