<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <DirectoryContainer></DirectoryContainer>
  <button @click="getDirectories('/root')">
    Get all directories
  </button>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import DirectoryContainer from "./components/directory/DirectoryContainer.vue";

export default {
  name: "App",
  mounted() {
    // handle reply from the backend
    window.ipc.on("READ_FILE", (payload) => {
      console.log(payload.content);
    });
  },
  components: {
    DirectoryContainer,
    // TextEditorContainer,
    // ComponentTreeContainer,
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
}
</style>
