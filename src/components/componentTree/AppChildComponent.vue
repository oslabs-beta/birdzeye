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
    <span>
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
import ComponentInfo from './ComponentInfo.vue';

export default {
  mounted() {
    //this method is invoked on mount to populate the childComponentObj and childComponentNameList data properties
    this.getChildrenComponents(this.componentInfo);
  },
  //component name prop: used to display component's name and create unique key
  //conmponentInfo prop: carries the object with all of the components information
  props: ['componentName', 'componentInfo'],
  components: {
    ComponentInfo,
  },
  //name property is required when recursively generating components
  name: 'appChildComponent',
  data() {
    return {
      //updated with the object exported from the location of the root component file
      childComponentsObj: {},
      //used in the v-for loop to create app-child-component components with the names of the component files
      childComponentNameList: [],
      hasChildComponents: false,
      showInfo: false,
      componentInfoKeys: Object.keys(this.componentInfo)
        .sort()
        //filter out superfluous information from component tree info
        .filter((e) => e !== 'render')
        .filter((e) => e !== 'components')
        .filter((e) => e !== '__hmrId')
        .filter((e) => e !== '__scopedId'),
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
  border-bottom: solid 1px #4fc08d;
  border-left: solid 1px #4fc08d;
  margin-bottom: 4px;
}
.dot {
  height: 14px;
  width: 14px;
  background: #4fc08d;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
}
</style>
