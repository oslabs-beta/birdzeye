<template>
  <button @click="refreshDirectoryTree(filePath)">
    Refresh
  </button>
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
