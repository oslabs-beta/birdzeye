<template>
  <div>
    <TheOpeningPage
      v-if="displayOpen"
      @close-open-page="switchToMain"
      @save-root-dir="setRoot"
    />
    <div v-else>
      <img
        alt="Birdzeye logo"
        src="./assets/birdzeye.png"
        height="200"
        width="300"
      />
      <TerminalV2Container></TerminalV2Container>
      <DirectoryContainer :rootdir="projectRoot" @selected-path="selectFilePath"></DirectoryContainer>
      <TheSimulatorContainer />
      <TheComponentTreeContainer />
      <TheTabContainer :selected-file-path="selectedFilePath"/>
      <!-- <TheTerminalTextEditorContainer /> -->
    </div>
  </div>
</template>

<script>
import DirectoryContainer from "./components/directory/DirectoryContainer.vue";
import TheSimulatorContainer from "./components/simulator/TheSimulatorContainer.vue";
import TheComponentTreeContainer from "./components/componentTree/TheComponentTreeContainer.vue";
import TheTabContainer from './components/tab/TheTabContainer.vue';
// import TheTerminalTextEditorContainer from "./components/terminalTextEditor/TheTerminalTextEditorContainer.vue";
import TerminalV2Container from "./components/TerminalV2/TerminalV2Container.vue";
import TheOpeningPage from "./components/TheOpeningPage.vue";

export default {
  name: "App",

  data() {
    return {
      displayOpen: true,
      projectRoot: "root",
      selectedFilePath: 'paaaaath',
    };
  },
  // provide() {
  //   //Send path to root file of project to DirectoryList
  //   return {
  //   rootdir: this.projectRoot
  // }
  // },
  components: {
    DirectoryContainer,
    TheSimulatorContainer,
    TheTabContainer,
    // TheTerminalTextEditorContainer,
    TheComponentTreeContainer,
    TerminalV2Container,
    // TerminalContainer,
    // SimulatorContainer,
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
      //receive emit from opening page telling page to derender
      this.displayOpen = closed;
    },
    setRoot(rootDir) {
      //receive emit from opening page with root directory path
      this.projectRoot = rootDir;
      console.log(this.projectRoot, "this.projectRoot in App.vue");
    },
    selectFilePath(data) {
      this.selectedFilePath = data;
    }
  },
  mounted() {
    // this.$root.$on('selected-file-path', (data) => {
    //   console.log(data, '......   data   ......')
    // })
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
