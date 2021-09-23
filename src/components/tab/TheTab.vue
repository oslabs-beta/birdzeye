<template>   
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
}
</script>

<style scoped>
  
</style>