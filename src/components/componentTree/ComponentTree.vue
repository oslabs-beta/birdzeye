<template>
 <h2>cmpName: {{ this.compName }}</h2>
  <h2>cmp: {{ this.comp }}</h2>
</template>

<script>

export default {
  props: ["cmpName", "cmp"],
  data() {
    return {
      compName: this.cmpName,
      comp: this.cmp,
    }
}
}
</script>

<style scoped>
  h2 {
    color: white;
  }
</style>