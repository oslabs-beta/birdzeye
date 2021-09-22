<template>
  <div>
    <TheOpeningPage
      v-if="displayOpen"
      @close-open-page="switchToMain"
      @save-root-dir="setRoot"
    />
    <div v-else>
      <div>{{ projectRoot }}</div>
      <img
        alt="Birdzeye logo"
        src="./assets/birdzeye.png"
        height="200"
        width="300"
      />
      <DirectoryContainer :rootdir="projectRoot"></DirectoryContainer>
      <TheSimulatorContainer />
      <TheComponentTreeContainer />
      <TheTabContainer :rootdir="projectRoot"/>
    </div>
  </div>
</template>

<script>
import DirectoryContainer from "./components/directory/DirectoryContainer.vue";
import TheSimulatorContainer from "./components/simulator/TheSimulatorContainer.vue";
import TheComponentTreeContainer from "./components/componentTree/TheComponentTreeContainer.vue";
import TheTabContainer from "./components/tab/TheTabContainer.vue";
import TheOpeningPage from "./components/TheOpeningPage.vue";

export default {
  name: "App",

  data() {
    return {
      displayOpen: true,
      projectRoot: "root",
    };
  },
  components: {
    DirectoryContainer,
    TheSimulatorContainer,
    TheTabContainer,
    TheComponentTreeContainer,
    TheOpeningPage,
  },
  methods: {
    getDirectories(path) {
      // ask backend to read file
      const payload = { path };
      window.ipc.send("READ_FILE", payload);
    },
    switchToMain(closed) {
      //receive emit from opening page telling page to derender
      this.displayOpen = closed;
    },
    setRoot(rootDir) {
      //receive emit from opening page with root directory path
      this.projectRoot = rootDir;
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
  background: "yellow";
}
</style>
