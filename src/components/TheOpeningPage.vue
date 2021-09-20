<template>
  <img alt="birdzeye logo" src="../assets/birdzeye2.png" height="200" width="300"><br>
  <button @click="rootDirPrompt">Choose your project's home directory!</button>
</template>

<script>
export default {
  emits: ['close-open-page', 'save-root-dir'],
  data() {
    return {
      rootDir: '',
    }
  },
  mounted() {
    // If user chooses directory, derender opening window component and save file path to rootDir property
    window.ipc.on("OPEN_FILE_DIALOG", (payload) => {
        if (payload.rootDir) {
          this.rootDir = payload.rootDir;
          this.goToMain();
        } else {
          //If user hits 'cancel', don't do anything so that they can press the button again
          return ;
        }
        
        
      })
  },
  methods: {
    rootDirPrompt() {
      //Request to backend to open dialog so user can choose root directory
      window.ipc.send("OPEN_FILE_DIALOG");
      
    },
    goToMain() {
      // This emits false to App.vue so that the opening page derenders and the main components render
      this.$emit('close-open-page', false);
      this.$emit('save-root-dir', this.rootDir);
    }
  }
}
</script>

<style scoped>
  button {
    color: rgb(96, 145, 18);
  }
</style>