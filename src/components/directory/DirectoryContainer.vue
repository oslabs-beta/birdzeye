<template>
  <div>
    <DirectoryList :rootdir="rootdir" @selected-path="selectFilePath">Directory List</DirectoryList>
  </div>
</template>

<script>
import DirectoryList from "./DirectoryList.vue";

export default {
  mounted() {
console.log(this.rootdir, 'this.rootdir in DirectoryContainer');
  },
  props: ['rootdir'],
  emits: ['selected-path'],
  components: {
    DirectoryList,
  },
  data() {
    return {
      allDirectories: [],
    };
  },
  methods: {
    selectFilePath(data) {
      this.$emit('selected-path', data);
    }
  },
};
</script>
