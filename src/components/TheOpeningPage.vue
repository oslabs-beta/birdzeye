<template>
  <img alt="birdzeye logo" src="../assets/birdzeye2.png" height="200" width="300"><br>
  <button @click="rootDirPrompt">Choose your project's home directory!</button>
</template>

<script>
export default {
  emits: ['close-open-page'],
  data() {
    return {
      rootDir: '',
    }
  },
  mounted() {
    window.ipc.on("OPEN_FILE_DIALOG", (payload) => {
        if (payload.rootDir) {
          this.rootDir = payload.rootDir;
          this.goToMain();
        } else {
          return ;
        }
        
        
      })
  },
  methods: {
    rootDirPrompt() {
      window.ipc.send("OPEN_FILE_DIALOG");
      
    },
    goToMain() {
      this.$emit('close-open-page', false);
    }
  }
}
</script>

<style scoped>
  button {
    color: rgb(96, 145, 18);
  }
</style>