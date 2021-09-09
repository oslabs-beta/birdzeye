<template>
  <div>
    <DirectoryList>Directory List</DirectoryList>
    <button @click="getDirectories">{{ allDirectories }}</button>
  </div>
</template>

<script>
import DirectoryList from "./DirectoryList.vue";

const fs = require("fs");
// const path = require('path')

export default {
  components: {
    DirectoryList,
  },
  data() {
    return {
      allDirectories: [],
    };
  },
  methods: {
    getDirectories() {
      const fileContents = fs.readdir("../directory", function(err, files) {
        if (files) console.log("files loaded", files);
        else console.log("there is an error", err);
      });
      this.allDirectories = fileContents;
      return "method returned";
    },
  },
};
</script>
