<template>
    <TheOpeningPage
      v-if="displayOpen"
      @close-open-page="switchToMain"
      @save-root-dir="setRoot"
      @root-name="getRootName"
    />
    <div v-else>
      <!-- <section>{{ projectRoot }}</section> -->
      <!-- <img
        alt="Birdzeye logo"
        src="./assets/birdzeye.png"
        height="200"
        width="300"
      /> -->
      <DirectoryContainer 
        :rootdir="projectRoot" 
        :directory-name="directoryName"
      ></DirectoryContainer>
      <TheSimulatorContainer />
      <TheComponentTreeContainer />
      <TheTabContainer :rootdir="projectRoot"/>
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
      directoryName: "",
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
    getRootName(rootName) {
      //receive emit from opening page with root directory path
      this.directoryName = rootName;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(255, 255, 255);
}
section {

}
</style>
