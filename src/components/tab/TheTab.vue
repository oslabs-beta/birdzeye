<template>   
  <div>Filename from Tab: {{ fileName }}</div>
  <TheTextEditor 
    :file-name="fileName"
  />
</template>

<script>
import TheTextEditor from "../terminalTextEditor/TheTextEditor.vue";

export default {
  props: ["fileName"],
  components: {
    TheTextEditor,
  },
  data() {
    return {
      // selectedTab: this.selectedPath
      // filePathName: this.filePath
    }
  }
}
</script>

<style scoped>
  
</style>