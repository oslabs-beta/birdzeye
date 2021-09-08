<template>
  <div>
  <div>I will be a Terminal {{ makeTerm() }}</div>    
  </div>
</template>

<script>
      import { Terminal } from 'xterm';
    //   import { onMounted } from 'vue';
    //   var term = new Terminal();
    //   term.open(document.getElementById('terminal'));
    //   term.write('Hello')
  export default {
    //   setup() {
    //     onMounted(() => {
    //       const term = new Terminal();
    //       term.open(this.$refs.terminal);
    //       term.write('Hello')
    //     }) 
          computed: {
              makeTerm() {
                const term = new Terminal();
                term.open(document.getElementById('terminal'));
                term.write('Hello');
                return term;
              }
          }
        
  
      
      
  };
</script>