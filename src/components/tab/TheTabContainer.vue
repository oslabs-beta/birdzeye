<template>   
  <div>filePathList: {{ filePathList }}</div>
  <div>selectedPath : {{ selectedPath }}</div>
  <TheTab 
    :key="filePath"
    :file-name="selectedPath"
  />
</template>

<script>
import TheTab from "./TheTab.vue";

export default {
  components: {
    TheTab,
  },
  // props: ["selectedFilePath"],
  data() {
    return {
      filePathList: this.filePath,
      selectedPath: this.filePath[1],
    }
  },
  // updated() {
 
  //   console.log(this.selectedPath, '........   selectedPath    ........')
  //   this.filePath()
  //      console.log(this.filePathList, '.....   filePathList   ......')
  // },
  // computed: {
  //   filePath() {
  //     return this.$store.getters.filePathList
  //   }a
  // },
  mounted() {
    this.filePath()
    // this.selectedFilePath()
       console.log(this.filePathList, '.....   filePathList   ......')
       console.log(this.selectedPath, '.....   selectedPath   ......')
  },
  updated() {
    this.selectedPath = this.filePathList[this.filePathList.length - 1]
  },
  methods: {
    filePath() {
      this.filePathList = this.$store.getters.filePathList
      this.selectedPath = this.filePathList[0]
    },
    // selectedFilePath() {
    //   this.selectedPath = this.$store.getters.currentFilePath
    // }
  },
  computed: {

  }
  // computed: {
  //   allFiles() {
  //     return this.$store.getters.filePathList;
  //   }
  // },
  // computed: {
  //   allFiles() {
  //     return this.$store.getters.filePathList;
  //   }
  // },
  // computed: {
  //   filePathList(state) {
  //     console.log(state, '......   state   ....')
  //     // console.log(this.$store.state.filePathList, 'this.$store.state.filePathList')
  //     return this.$store.state.filePathList
  //     // return state.filePathList
  //   }
  //   // filePathList() {
  //   //   console.log(this.$store.getters.filePathList, '.......   this.$state.filePathList   ........')
  //   //   return this.$store.getters.filePathList
  //   // }
  //   // console.log(this.$store.getters.filePathList(), '.......   this.$state.filePathList   ........')
  // },
}
</script>

<style scoped>
  
</style>



// <html>
//  <head>
//  </head>
//  <body>
//   <h3>Click on the tabs below:</h3>
//   <div class="tab">
//     <button class="tablinks" onclick="clickHandle(event, 'Cat')">Cat</button>
//     <button class="tablinks" onclick="clickHandle(event, 'Bear')">Bear</button>
//     <button class="tablinks" onclick="clickHandle(event, 'Dog')">Dog</button>
//   </div>

//   <div id="Cat" class="tabcontent">
//     <h3>Meowww.</h3>
//   </div>

//   <div id="Bear" class="tabcontent">
//     <h3>Rawrrr.</h3>
//   </div>

//   <div id="Dog" class="tabcontent">
//     <h3>Bork Bork.</h3>
// </div>

// <script>
// function clickHandle(evt, animalName) {
//   let i, tabcontent, tablinks;

//   // This is to clear the previous clicked content.
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }

//   // Set the tab to be "active".
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].className = tablinks[i].className.replace(" active", "");
//   }

//   // Display the clicked tab and set it to active.
//   document.getElementById(animalName).style.display = "block";
//   evt.currentTarget.className += " active";
// }
// </script>

//  </body>
// </html>