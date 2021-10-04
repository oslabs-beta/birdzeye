<template>
  <section class="cmp-tree-list-wrapper">
    <div class="cmp-tree-title-wrapper">
      <h4 class="cmp-tree-title">Component Tree</h4>
      <!-- <button @click="getAppRoot">Init Tree</button> -->
    </div>
    <!-- <init-component-tree-button></init-component-tree-button> -->
    <div class="cmp-tree">
      <app-child-component
        class="app-child-cmp"
        v-for="component in childComponentNameList"
        :key="component"
        :component-name="component"
        :component-info="childComponentsObj[component]"
      >
      </app-child-component>
    </div>
  </section>
</template>

<script>
import AppChildComponent from './AppChildComponent.vue';
// plan to make import location dynamic in future updates

//update with the location of your Vue applications root component
import App from '../../App.vue';

export default {
  mounted() {
    //on mount, establish ipc listener to listen for the file location of the path from the electron dialoge box
    //will be incorporated in a future update...

    // window.ipc.on("GET_APP_PATH", (payload) => {
    //   if (payload.path) {
    //     this.pathApp = payload.path;
    //   } else {
    //     //If user hits 'cancel', don't do anything so that they can press the button again
    //     return;
    //   }
    //   // this.getChildrenComponents(App);
    // });

    //this method is invoked on mount to populate the childComponentObj and childComponentNameList data properties
    this.getChildrenComponents(App);
  },
  components: {
    AppChildComponent,
  },
  data() {
    return {
      //updated with the object exported from the location of the root component file
      childComponentsObj: {},
      //used in the v-for loop to create app-child-component components with the names of the component files
      childComponentNameList: [],
    };
  },
  methods: {
    getChildrenComponents(parentComponent) {
      //if the parent has children
      if (parentComponent.components) {
        //store the info about all the parent's children in an object
        this.childComponentsObj = parentComponent.components;
        //store the names of each child in an array
        this.childComponentNameList = Object.keys(parentComponent.components);
      }
    },

    //******** Will incorporate in a future update ********/

    // getAppRoot() {
    //   window.ipc.send("GET_APP_PATH");
    // },
  },
};
</script>

<style scoped>
.cmp-tree-list-wrapper {
  background-color: #282a36;
  color: #f8f8f2;
  margin-top: 6px;
  height: 59%;
  overflow: scroll;
  position: relative;
  object-fit: contain;
}
.cmp-tree-title-wrapper {
  display: flex;
  border-bottom: solid 2px #273a4a;
  padding: 4px 10px;
}
.cmp-tree-title {
  font-weight: bold;
  margin-right: auto;
  opacity: 0.8;
  padding: 6px 8px;
}
.cmp-tree {
  position: absolute;
  height: auto;
  width: 100%;
  padding-left: 10px;
  padding-top: 10px;
}
.app-child-cmp {
  padding: 4px 10px;
}
button {
  background-color: #282a36;
  border: 0;
  color: #f8f8f2;
  font-weight: 600;
}
</style>
