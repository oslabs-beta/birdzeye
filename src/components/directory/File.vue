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
      name: this.fileName,
      path: this.parentPath,
      selectedPath: '',
    };
  },

  methods: {
    handleSelectPath() {
      this.selectedPath = this.path;
    },
  },
  updated() {
    console.log(this.fileName, '.......  fileName  .........')
    console.log(this.selectedPath, '.......  selectedPath  .........')
    console.log(this.path, '.......  path  .........')
  },
};
</script>
