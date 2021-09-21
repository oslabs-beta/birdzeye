<template>
  <div>
    <h2>{{ allFiles }}</h2>
    <button @click="handleSelectPath" >{{ fileName }}</button>
    <!-- <right-click-form>Right Click Form</right-click-form> -->
  </div>
</template>

<script>
// import RightClickForm from "./RightClickForm.vue";

export default {
  // mounted(){
  //   this.handleSelectPath()
  // },
  props: ["fileName", "parentPath"],
  emits: ["selected-file-path"],
  components: {
    // RightClickForm,
  },
  data() {
    return {
      componentTreeFileName: this.fileName,
      filePath: this.parentPath + "/" + this.fileName,
    };
  },
  // updated() {
  //   this.filePath = this.parentPath + "/" + this.fileName
  //   // console.log(this.parentPath + "/" + this.fileName, '...... filePath   ......')
  // },
  computed: {
    allFiles() {
      return this.$store.getters.filePathList;
    },
  },
  methods: {
   handleSelectPath() {
     const path = this.filePath
     this.$store.dispatch("addFilePath", { path });
   },
  //  choosePath() {
  //    const path = this.filePath
  //    this.$store.dispatch("addFilePath", { path });
  //  }
    // handleSelectPath() {
    //   this.$emit("selected-file-path", this.filePath)
    //     //  console.log(this.parentPath + "/" + this.fileName, '...... filePath   ......')
    //     //  console.log(this.filePath, '...... filePath   ......')
    // }
  }
};
</script>

<style scoped>
h2 {
  color: white;
}
</style>