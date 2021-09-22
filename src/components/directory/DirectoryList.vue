<template>
  <div>
    <directory
      :directory-name="directory"
      v-for="directory in allDirectories"
      :key="directory"
      parent-path="pathToDirectory"
    ></directory>
    <file
      :file-name="file"
      v-for="file in allFiles"
      :key="file"
      parent-path="pathToDirectory"
    ></file>
  </div>
</template>

<script>
import Directory from "./Directory.vue";
import File from "./File.vue";

export default {
  props: ["rootdir"],
  mounted() {
    // handle reply from the backend
    window.ipc.on("READ_DIRECTORY", (payload) => {
      this.allDirectories = payload.contentFiles;
    }),
      window.ipc.on("READ_FILE", (payload) => {
        this.allFiles = payload.contentFiles;
      });

    //this.directory is the file path passed from the pop up on the opening page
    this.getDirectories(this.pathToDirectory);

    this.getFiles(this.pathToDirectory);
  },

  components: {
    Directory,
    File,
  },
  data() {
    return {
      allDirectories: [],
      allFiles: [],
      pathToDirectory: this.rootdir + "/",
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
