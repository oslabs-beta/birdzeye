<template>
  <div>
    <button>App</button>
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
// import App from "../../App.vue";
import App from "../../App.vue";
import AppChildComponent from "./AppChildComponent.vue";

export default {
  mounted() {
    this.getChildrenComponents(App);
  },
  components: {
    AppChildComponent,
  },
  data() {
    return {
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
  },
};
</script>

<style scoped></style>
