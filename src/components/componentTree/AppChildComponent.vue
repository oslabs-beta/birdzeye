<template>
  <div>
    <span class="line"></span>
    <span class="dot"></span>
    <button @click="toggleComponentInfo">{{ componentName }}</button>
    <span v-show="showInfo === true">
      <component-info
        class="cmp-info"
        v-for="config in componentInfoKeys"
        :key="config + componentName"
        :config-keys="config"
        :config-value="componentInfo[config]"
      ></component-info>
    </span>
    <span v-if="hasChildComponents === true">
      
        <app-child-component
          class="app-child-cmp"
          v-for="branch in childComponentNameList"
          :key="branch"
          :component-name="branch"
          :component-info="childComponentsObj[branch]"
        ></app-child-component>
     
    </span>
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
  .cmp-info {
    text-align: left;
    padding-left: 16px;
  }
  .app-child-cmp {
    text-align: left;
    padding-left: 16px;
  }
  .line {
    height: 16px;
    width: 9px;
    display: inline-block;
    background: #282a36;
    border-radius: 0 0 0 7px;
    border-bottom: solid 1px #4FC08D;
    border-left: solid 1px #4FC08D;
    margin-bottom: 4px;
  }
  .dot {
    height: 14px;
    width: 14px;
    background: #4FC08D;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
  }
</style>
