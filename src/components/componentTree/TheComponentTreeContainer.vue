<template>
  <component-tree
     v-for="cmp in componentList"
     :key="cmp"
     :cmp-name="componentList.cmp"
     :cmp="cmp"
  ></component-tree>
</template>

<script>
import App from '../../App.vue';
import ComponentTree from './ComponentTree.vue';

export default {
  components: {
    ComponentTree
  },
  mounted() {
    
    const setComponentName = (cmp) => {
      console.log(cmp.name, '....cmp.name ...')
      if (cmp.components) {
        this.componentNameList.push(...Object.keys(cmp.components));
        for (const [cmpName, cmpDetails] of Object.entries(cmp.components)) {
          // console.log(cmpName, '......    key   ........')
          // console.log(cmpDetails, '......    val   ........')
          // // cmpDetails.parentCmpName = cmp.name || cmpName;
          // console.log(Object.keys(cmpDetails.components).length, '......        Objt .........')
          if (cmpDetails.components) {
            if (Object.keys(cmpDetails.components).length > 0) {
              cmpDetails.parentCmpName = cmpName;
            }
          }

          this.componentList[cmpName] = cmpDetails
          // const cmpProps = cmpDetails.props;
          // const cmpChild = [...Object.keys(cmpDetails.components)];
          // this.componentList[cmpName] = {'Props': cmpProps, 'Child-Components': cmpChild};
          setComponentName(cmpDetails);
        }
      }
    };
    setComponentName(App);
    console.log(this.componentList, 'componentlist    ')
  },
  data() {
    return {
      componentList: {},
      componentNameList: [],
    }
  }
}
</script>

<style scoped>

</style>