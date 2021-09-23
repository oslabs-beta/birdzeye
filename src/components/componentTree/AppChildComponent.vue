<template>
  <div>
    <button @click="toggleComponentInfo">{{ componentName }}</button>
    <div v-show="showInfo === true">
      <component-info
        v-for="config in componentInfoKeys"
        :key="config + componentName"
        :config-keys="config"
        :config-value="componentInfo[config]"
      ></component-info>
    </div>
    <div v-if="hasChildComponents === true">
      <app-child-component
        v-for="branch in childComponentNameList"
        :key="branch"
        :component-name="branch"
        :component-info="childComponentsObj[branch]"
      ></app-child-component>
    </div>
  </div>
</template>

<script>
import ComponentInfo from "./ComponentInfo.vue";

export default {
  mounted() {
    this.getChildrenComponents(this.componentInfo);
  },
  props: ["componentName", "componentInfo"],
  components: {
    ComponentInfo,
  },
  name: "appChildComponent",
  data() {
    return {
      childComponentsObj: {},
      childComponentNameList: [],
      hasChildComponents: false,
      showInfo: false,
      componentInfoKeys: Object.keys(this.componentInfo)
        .sort()
        .filter((e) => e !== "components" || e !== "render"),
    };
  },
  methods: {
    getChildrenComponents(parentComponent) {
      //if this component has children
      if (parentComponent.components) {
        this.hasChildComponents = true;
        //store the info about all the parents children
        this.childComponentsObj = parentComponent.components;

        //store the names of each child in an array
        this.childComponentNameList = Object.keys(parentComponent.components);
      }
    },
    toggleComponentInfo() {
      this.showInfo = !this.showInfo;
    },
  },
};
</script>

<style scoped>
  button {
    background-color: #282a36;
    border: 0;
    color: #f8f8f2;
    font-weight: 600;
  }
</style>
