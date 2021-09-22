<template>
  <section>
    <button @click="toggleFiles">{{ directoryName }}</button>
    <file
      class="file-wrapper"
      :file-name="file"
      v-for="file in allFiles"
      :key="file"
      :parent-path="path"
      v-show="showFiles === true"
    ></file>
    <directory
      :directory-name="directory"
      v-for="directory in allSubDirectories"
      :key="directory"
      :parent-path="path"
      v-show="showFiles === true"
    ></directory>
  </section>
</template>

<script>
import File from "./File.vue";

export default {
  mounted() {
    // handle reply from the backend for files
    window.ipc.on("READ_SUBFILE", (payload) => {
      if (payload.rootFileName === this.path)
        this.allFiles.push(...payload.contentFiles);
    }),
      // handle reply from the backend for directories
      window.ipc.on("READ_SUBDIRECTORY", (payload) => {
        if (payload.rootDirectoryName === this.path)
          this.allSubDirectories.push(...payload.contentFiles);
      });
    //methods used to make request to backend
    this.getSubDirectories(this.path);
    this.getFiles(this.path);
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
      path: this.parentPath + "/" + this.directoryName,
      filePath: "",
    };
  },
  methods: {
    toggleFiles() {
      this.showFiles = !this.showFiles;
    },

    getSubDirectories(path) {
      const ignoreFiles = [`./dist_electron`, `./node_modules`, `./.git`];

      if (!ignoreFiles.includes(path)) {
        // ask backend to read file
        const payload = { path };
        window.ipc.send("READ_SUBDIRECTORY", payload);
      }
    },

    getFiles(path) {
      const ignoreFiles = [`./dist_electron`, `./node_modules`, `./.git`];
      if (!ignoreFiles.includes(path)) {
        const payload = { path };
        window.ipc.send("READ_SUBFILE", payload);
      }
    },
  },
};
</script>

<style scoped>
.file-wrapper {
  padding-left: 10px;
}
</style>