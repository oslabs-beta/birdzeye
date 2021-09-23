<template>
  <div class="filename-wrapper">
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
      // console.log(document.getElementsByClassName('filename-wrapper'))
      // document.querySelector('.filename-wrapper').classList.add('.active')
      const path = this.filePath;
      this.$store.dispatch("addFilePath", { path });
    },
  },
};
</script>

<style scoped>
.filename-wrapper {
  display: block;
}
.active {
  background: red;
  /* opacity: .6; */
}
</style>
