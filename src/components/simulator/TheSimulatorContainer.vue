<template>
  <iframe id="sim" src="projecturl"></iframe>
</template>

<script>
// const { ipcRenderer } = require('electron');
// ipcRenderer.on = function('start-sim', (ev, ar) => {
//   projecturl = ar[0];
// })
export default {
  data() {
    return {
      display: 0,
      projecturl: '',
    }
  },
  methods: {
    
  } 
}
</script>

<style scoped>
  #sim {
    border: 1px;
    background-color: rgb(40, 209, 49);
    height: 30em;
    width: 40em;
  }
</style>