<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <DirectoryContainer></DirectoryContainer>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import DirectoryContainer from "./components/directory/DirectoryContainer.vue";

export default {
  name: "App",
  components: {
    DirectoryContainer,
    // TextEditorContainer,
    // ComponentTreeContainer,
    // TerminalContainer,
    // SimulatorContainer,
    // TabContainer
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
