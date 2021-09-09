<template>
  <div>
    <button @click="toggleFiles">{{ directoryName }}</button>
    <file
      :file-name="file"
      v-for="file in allFiles"
      :key="file"
      :parent-path="path"
    ></file>
    <directory
      :directory-name="directory"
      v-for="directory in allSubDirectories"
      :key="directory"
      :parent-path="path"
    ></directory>
  </div>
</template>

<script>
import File from "./File.vue";

export default {
  mounted() {
    // handle reply from the backend
    window.ipc.on("READ_FILE", (payload) => {
      this.allFiles = Object.values(payload.content);
    }),
      window.ipc.on("READ_DIRECTORY", (payload) => {
        this.allSubDirectories = Object.values(payload.content);
      });
    //   this.getSubDirectories(this.path);
    // this.getFiles(this.path);
  },
  props: ["directoryName", "parentPath"],
  components: {
    File,
  },
  //name config used to recursively call directory
  name: "directory",
  data() {
    return {
      allFiles: [],
      allSubDirectories: [],
      showFiles: false,
      path: this.parentPath + this.directoryName,
    };
  },
  methods: {
    toggleFiles() {
      this.showFiles = !this.showFiles;
    },
    getSubDirectories(path) {
      // const ignoreFiles = [`./dist_electron`, `./node_modules`, ]
      // if (!ignoreFiles.includes(path)){
      if (path === "./src") {
        // ask backend to read file
        const payload = { path };
        window.ipc.send("READ_DIRECTORY", payload);
      }
    },
    getFiles(path) {
      // const ignoreFiles = [`./dist_electron`, `./node_modules`, ]
      // if (!ignoreFiles.includes(path)){
      if (path === "./src") {
        // ask backend to read file
        const payload = { path };
        window.ipc.send("READ_FILE", payload);
      }
    },
  },
};
</script>
