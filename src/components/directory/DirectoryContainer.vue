<template>
  <div>
    <TheDirectoryListRefreshButton
      :rootdir="rootdir"
    ></TheDirectoryListRefreshButton>
    <DirectoryList :rootdir="rootdir">Directory List</DirectoryList>
  </div>
</template>

<script>
import DirectoryList from "./DirectoryList.vue";
import TheDirectoryListRefreshButton from "./TheDirectoryListRefreshButton.vue";

export default {
  mounted() {
    console.log(this.rootdir, "this.rootdir in DirectoryContainer");
  },
  props: ["rootdir"],
  components: {
    DirectoryList,
    TheDirectoryListRefreshButton,
  },
  data() {
    return {
      allDirectories: [],
    };
  },
  methods: {},
};
</script>
