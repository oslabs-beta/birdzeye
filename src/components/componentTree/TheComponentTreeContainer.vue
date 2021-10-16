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
import AppChildComponent from "./AppChildComponent.vue";
// import App from "../../../../cmp-communication-assignment-problem/src/App.vue";
import App from "../../App.vue";
// import InitComponentTreeButton from "./InitComponentTreeButton.vue";
// import App from {this.appPath}
// let pathToApp;
// import { defineAsyncComponent } from "vue";
// const App = () => import(pathToApp);
// const App = () => import(`${pathApp}`);

export default {
  // name: "App",
  // props: {
  //   app:{
  //     type: String,
  //     required:true
  //   }
  // },
  // computed: {
  //   comp(){
  //     return defineAsyncComponent from (() => (`@/`))
  //   }
  // },
  mounted() {
    window.ipc.on("GET_APP_PATH", (payload) => {
      if (payload.path) {
        this.pathApp = payload.path;
      } else {
        //If user hits 'cancel', don't do anything so that they can press the button again
        return;
      }
      // this.getChildrenComponents(App);
    });
    this.getChildrenComponents(App);
  },
  components: {
    AppChildComponent,
    // InitComponentTreeButton,
    // App: defineAsyncComponent(() => import(`${pathApp}`)),
  },
  data() {
    return {
      pathApp: "",
      childComponentsObj: {},
      childComponentNameList: [],
    };
  },
  methods: {
    getChildrenComponents(parentComponent) {
      //if the parent has children, in this case app
      if (parentComponent.components) {
        //store the info about all the parent's children in an object
        this.childComponentsObj = parentComponent.components;
        //store the names of each child in an array
        this.childComponentNameList = Object.keys(parentComponent.components);
      }
    },
    getAppRoot() {
      window.ipc.send("GET_APP_PATH");
    },
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
    border-bottom: solid 2px #273A4A;
    padding: 4px 10px;  
  }
  .cmp-tree-title {
    font-weight: bold;
    margin-right: auto;
    opacity: .8;
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
