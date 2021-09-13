<template>
  <div>
    <TheSimulatorContainer />
    <TheTextEditorContainer />
    <TheTerminalContainer />
  </div>
</template>

<script>
import TheSimulatorContainer from './components/simulator/TheSimulatorContainer.vue';
import TheTextEditorContainer from './components/textEditor/TheTextEditorContainer.vue';
import TheTerminalContainer from './components/terminal/TheTerminalContainer.vue';
  
      
export default {
  components: {
    TheSimulatorContainer,
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