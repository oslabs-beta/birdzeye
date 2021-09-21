<template>
  <div>
    <directory
      :directory-name="directory"
      v-for="directory in allDirectories"
      :key="directory"
      :parent-path="pathToDirectory"
      @selected-path="selectFilePath"
    ></directory>
    <file
      :file-name="file"
      v-for="file in allFiles"
      :key="file"
      :parent-path="pathToDirectory"
      @selected-file-path="selectFilePath"
    ></file>
  </div>
</template>

<script>
import Directory from "./Directory.vue";
import File from "./File.vue";

export default {
  props: ['rootdir'],
  emits: ['selected-path'],
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
    //this.directory is the file path passed from the pop up on the opening page
    this.getDirectories(this.pathToDirectory);
    // console.log("this.allDirectories :", typeof this.allDirectories);
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
      pathToDirectory: this.rootdir + '/',
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
    selectFilePath(data) {
      this.$emit('selected-path', data);
    },
  },
};
</script>
