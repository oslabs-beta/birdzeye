<template>
  <div>
    <button @click="getAppRoot">Init Tree</button>
    <!-- <init-component-tree-button></init-component-tree-button> -->
    <app-child-component
      v-for="component in childComponentNameList"
      :key="component"
      :component-name="component"
      :component-info="childComponentsObj[component]"
    >
    </app-child-component>
  </div>
</template>

<script>
import AppChildComponent from "./AppChildComponent.vue";
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

<style scoped></style>
