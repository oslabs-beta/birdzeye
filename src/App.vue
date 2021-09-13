<template>
  <div>
    <TheSimulatorContainer />
    <TheTerminalTextEditorContainer />
  </div>
</template>

<script>
import TheSimulatorContainer from './components/simulator/TheSimulatorContainer.vue';
import TheTerminalTextEditorContainer from './components/terminalTextEditor/TheTerminalTextEditorContainer.vue';

  
      
export default {
  components: {
    TheSimulatorContainer,
    TheTerminalTextEditorContainer,
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