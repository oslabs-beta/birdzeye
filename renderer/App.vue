<template>
  <TheTextEditorContainer />
  <h2>hello from vue~</h2>
  <TheTerminalContainer />
</template>

<script>
import TheTextEditorContainer from './textEditor/TheTextEditorContainer.vue';
import TheTerminalContainer from './terminal/TheTerminalContainer.vue';

export default {
  components: {
    TheTextEditorContainer,
    TheTerminalContainer,
  }
}
</script>

<style scoped>
  
</style>