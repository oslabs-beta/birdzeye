<template>
  <section class="file-tree">
    <div class="file-directory-title-wrapper">
      <h4 class="file-directory-title">File Directory</h4>
      <TheDirectoryListRefreshButton
        :rootdir="rootdir"
      ></TheDirectoryListRefreshButton>
    </div>
    <h4>{{ directoryName }}</h4>
    <div class="dirlist-wrapper">
      <DirectoryList :rootdir="rootdir">Directory List</DirectoryList>
    </div>
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
.file-tree {
  background-color: #282a36;
  color: #f8f8f2;
  height: 40%;
  position: relative;
  overflow: scroll;
  object-fit: contain;
}
.file-directory-title-wrapper {
  display: flex;
  border-bottom: solid 2px #273A4A;
  padding: 4px 10px;
  align-items: center;
}
.file-directory-title {
  font-weight: bold;
  margin-right: auto;
  opacity: .8;
  padding: 6px 8px;
}
button {
  background-color: #282a36;
  border: 0;
  color: #f8f8f2;
  font-weight: 600;
}
h4 {
  font-size: 14px;
  margin: 0;
  padding: 4px 18px;
}
.dirlist-wrapper {
  padding: 3px 30px;
  height: 40%;
  position: absolute;
  height: auto;
  /* overflow: scroll; */
}
</style>