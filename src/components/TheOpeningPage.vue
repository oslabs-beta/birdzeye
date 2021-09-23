<template>
  <section>
    <button @click="rootDirPrompt">Open Project</button>
    <img alt="birdzeye logo" src="../assets/birdzeye.png">
  </section>
</template>

<script>
export default {
  emits: ['close-open-page', 'save-root-dir', 'root-name'],
  data() {
    return {
      rootDir: '',
      rootName: '',
    }
  },
  mounted() {
    // If user chooses directory, derender opening window component and save file path to rootDir property
    window.ipc.on("OPEN_FILE_DIALOG", (payload) => {
      if (payload.rootDir) {
        this.rootDir = payload.rootDir;
        this.rootName = this.getHomeDirectory(this.rootDir);
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
      this.$emit('root-name', this.rootName)
    },
    getHomeDirectory(filePath) {
      let slashPos = 0;
      if (filePath) {
        for (let i = filePath.length; i > 0; i--) {
          if (filePath[i] === '/') {
            slashPos = i;
            break;
          }
        }
      } 
      return filePath.slice(slashPos + 1);
    },
  }
}
</script>

<style scoped>
  button {
    background-color:#273A4A;
    border: none;
    color: white;
    float: left;
    font-size: 16px;
    font-weight: bold;
    margin-top: 50px;
    margin-left: 50px;
  }
  img {
    width: 124em;
    /* opacity: .6;
    position: relative;
    top: -200px;
    left: 10px;
    width: 2600px;
    z-index: -1; */
  }
</style>