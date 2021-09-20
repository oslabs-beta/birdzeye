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
    };
  },
};
</script>
