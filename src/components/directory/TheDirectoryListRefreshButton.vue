<template>
  <span @click="refreshDirectoryTree(filePath)" class="material-icons refresh">refresh</span>
</template>

<script>
export default {
  props: ["rootdir"],
  data() {
    return {
      filePath: this.rootdir + "/",
    };
  },
  methods: {
    refreshDirectoryTree(path) {
      const payload = { path };
      window.ipc.send("READ_DIRECTORY", payload);
      window.ipc.send("READ_FILE", payload);
    },
  },
};
</script>

<style scoped>
  .material-icons.refresh { 
    padding: 0 4px;
  }
</style>