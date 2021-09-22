<template>
  <section id="file-tree">
    <div className="file-directory-title-wrapper">
      <h5>File Directory</h5>
      <TheDirectoryListRefreshButton
        :rootdir="rootdir"
      ></TheDirectoryListRefreshButton>
    </div>
    <h5>{{ directoryName }}</h5>
    <DirectoryList :rootdir="rootdir">Directory List</DirectoryList>
  </section>
</template>

<script>
import DirectoryList from "./DirectoryList.vue";
import TheDirectoryListRefreshButton from "./TheDirectoryListRefreshButton.vue";

export default {
  props: ["rootdir", "directoryName"],
  components: {
    DirectoryList,
    TheDirectoryListRefreshButton,
  },
  data() {
    return {
      allDirectories: [],
    };
  },
};
</script>

<style>
.file-directory-title-wrapper {
  display: flex;
}
#file-tree {
  background: #121212;
  color: rgb(255, 255, 255);
  width: 20%;
}
button {
  background: #121212;
  border: 0;
  color: rgb(255, 255, 255);
  font-weight: bold;
}
</style>