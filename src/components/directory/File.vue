<template>
  <div>
    <button @click="handleSelectPath">{{ fileName }}</button>
    <!-- <right-click-form>Right Click Form</right-click-form> -->
  </div>
</template>

<script>
// import RightClickForm from "./RightClickForm.vue";

export default {
  props: ["fileName", "parentPath"],

  components: {
    // RightClickForm,
  },
  data() {
    return {
      componentTreeFileName: this.fileName,
      filePath: this.parentPath + "/" + this.fileName,
    };
  },
  computed: {
    allFiles() {
      return this.$store.getters.filePathList;
    },
  },
  methods: {
    handleSelectPath() {
      const path = this.filePath;
      this.$store.dispatch("addFilePath", { path });
    },
  },
};
</script>

<style scoped>
h2 {
  color: white;
}
</style>
