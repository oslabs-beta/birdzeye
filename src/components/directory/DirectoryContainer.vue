<template>
  <div>
    <DirectoryList>Directory List</DirectoryList>
  </div>
</template>

<script>
import DirectoryList from "./DirectoryList.vue";

export default {
  components: {
    DirectoryList,
  },
  data() {
    return {
      allDirectories: [],
    };
  },
  methods: {},
};
</script>
