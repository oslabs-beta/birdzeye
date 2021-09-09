<template>
  <directory
    :directory-name="directory"
    v-for="directory in allDirectories"
    :key="directory"
    parent-path="./"
  ></directory>
  <file
    :file-name="file"
    v-for="file in allFiles"
    :key="file"
    parent-path="./"
  ></file>
</template>

<script>
import Directory from "./Directory.vue";
import File from "./File.vue";

export default {
  mounted() {
    // handle reply from the backend
    window.ipc.on("READ_DIRECTORY", (payload) => {
      this.allDirectories = Object.values(payload.content);
    }),
      window.ipc.on("READ_FILE", (payload) => {
        this.allFiles = Object.values(payload.content);
      });
    this.getDirectories("./");
    this.getFiles("./");
  },
  components: {
    Directory,
    File,
  },
  data() {
    return {
      allDirectories: [],
      allFiles: [],
      // directory: "",
    };
  },
  methods: {
    getDirectories(path) {
      // ask backend to read file
      const payload = { path };
      window.ipc.send("READ_DIRECTORY", payload);
    },
    getFiles(path) {
      // ask backend to read file
      const payload = { path };
      window.ipc.send("READ_FILE", payload);
    },
  },
};
</script>
