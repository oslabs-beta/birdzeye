<template>   
  <button @click="setDisplay">Toggle</button>
  <TheTab 
    v-show="showText"
    :key="filePath"
    :file-name="selectedPath"
  />
  <TerminalV2Container v-show="showTerm" :rootdir="rootdir"/>
</template>

<script>
import TheTab from "./TheTab.vue";
import TerminalV2Container from "../TerminalV2/TerminalV2Container.vue";

export default {
  props: ["rootdir"],
  components: {
    TheTab,
    TerminalV2Container,
  },
  data() {
    return {
      filePathList: this.filePath,
      selectedPath: this.filePath[1],
      showTerm: false,
      showText: true,
    }
  },
  mounted() {
    this.filePath()
  },
  updated() {
    this.selectedPath = this.filePathList[this.filePathList.length - 1]
  },
  methods: {
    filePath() {
      this.filePathList = this.$store.getters.filePathList
      this.selectedPath = this.filePathList[0]
    },
    setDisplay() {
      this.showTerm = !this.showTerm;
      this.showText = !this.showText;
    },
  },
}
</script>

<style scoped>
  
</style>