<template>
  <div>
  <h2>hell word</h2>
  <TheTextEditorContainer />
  <TheTerminalContainer />
  </div>
</template>

<script>
import TheTextEditorContainer from './components/textEditor/TheTextEditorContainer.vue';
import TheTerminalContainer from './components/terminal/TheTerminalContainer.vue';
  
      
export default {
  components: {
    TheTextEditorContainer,
    TheTerminalContainer,
  },
  
}
</script>

<style scoped>
  h2 {
    color: wheat;
  }
  div {
    color: black;
  }
</style>