<template>
  <div>
    <DirectoryList :rootdir="rootdir">Directory List</DirectoryList>
  </div>
</template>

<script>
import DirectoryList from "./DirectoryList.vue";

export default {
  mounted() {
console.log(this.rootdir, 'this.rootdir in DirectoryContainer');
  },
  props: ['rootdir'],
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
