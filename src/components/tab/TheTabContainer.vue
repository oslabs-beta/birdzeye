<template>   
  <span 
    class="material-icons port-texteditorbtn-container"
    @click="setDisplay"
  >
  sync_alt
  </span>
  <!-- <button 
    class="port-texteditorbtn-container"
    @click="setDisplay"
  >Toggle</button> -->
  <section class="tab-terminal-wrapper">
    <TheTab 
      v-show="showText"
      :key="filePath"
      :file-name="selectedPath"
    />
    <TerminalV2Container v-show="showTerm" :rootdir="rootdir"/>
  </section>
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
  .material-icons {
    /* float: right; */
    padding: 0 6px;
  }
  .tab-terminal-wrapper {
    font-family: monospace;
    margin-left: 4px;
  }
</style>