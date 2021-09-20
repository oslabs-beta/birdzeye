<template>
  <div>
    <directory
      :directory-name="directory"
      v-for="directory in allDirectories"
      :key="directory"
      parent-path="."
    ></directory>
    <file
      :file-name="file"
      v-for="file in allFiles"
      :key="file"
      parent-path="."
    ></file>
  </div>
</template>

<script>
import Directory from "./Directory.vue";
import File from "./File.vue";

export default {
  props: ['rootdir'],
  mounted() {
    console.log(this.rootdir, 'this.rootdir in DirectoryList mounted');
    // handle reply from the backend
    window.ipc.on("READ_DIRECTORY", (payload) => {
      this.allDirectories = payload.contentFiles;
      // console.log("this.allDirectories :", this.allDirectories);
    }),
      window.ipc.on("READ_FILE", (payload) => {
        this.allFiles = payload.contentFiles;
        // console.log("this.allFiles :", this.allFiles);
      });
    console.log(this.directory, 'this.directory in DirectoryList');
    this.getDirectories(this.directory);
    // console.log("this.allDirectories :", typeof this.allDirectories);
    this.getFiles(this.directory);
  },
  // updated() {
  //   console.log(this.directory, "this.directory in DirectoryList");
  //   console.log(this.rootdir, 'this.rootdir in DirectoryList');
  //   this.getDirectories(this.directory);
  //   this.getFiles(this.directory);
  // },
  components: {
    Directory,
    File,
  },
  data() {
    return {
      allDirectories: [],
      allFiles: [],
      directory: this.rootdir + '/',
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
