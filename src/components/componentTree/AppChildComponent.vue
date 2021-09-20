<template>
  <div>
    <button>{{ componentName }} || {{ componentInfoKeys }}</button>
    <div>
      <component-info
        v-for="config in componentInfoKeys"
        :key="config + componentName"
        :config-keys="config"
        :config-values="componentInfo[config]"
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
      componentInfoKeys: Object.keys(this.componentInfo).sort(),
      componentInfoValues: Object.values(this.componentInfo).sort(),
    };
  },
  methods: {
    getChildrenComponents(parentComponent) {
      //if this component has children
      if (parentComponent.components) {
        this.hasChildComponents = true;
        //store the info about all the parents children
        this.childComponentsObj = parentComponent.components;
        console.log(this.childComponentsObj);
        //store the names of each child in an array
        this.childComponentNameList = Object.keys(parentComponent.components);
        console.log(this.childComponentNameList);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  color: white;
}
</style>
