<template>
  <div>
  <h2>Vuety</h2>
  <TheSimulatorContainer />
  <TheTextEditorContainer />
  <TheTerminalContainer />
  </div>
</template>

<script>
import TheTextEditorContainer from './components/textEditor/TheTextEditorContainer.vue';
import TheTerminalContainer from './components/terminal/TheTerminalContainer.vue';
import TheSimulatorContainer from './components/simulator/TheSimulatorContainer.vue';
  
      
export default {
  components: {
    TheTextEditorContainer,
    TheTerminalContainer,
    TheSimulatorContainer,
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