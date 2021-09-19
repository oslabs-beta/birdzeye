<template>
  <iframe id="sim" :src="projecturl"></iframe>
  <form @click.prevent="choosePort" @keydown.enter.prevent="choosePort">
    <input id="portChoice" placeholder="http://localhost:____/" v-model="portNumber">
    <submit>Enter Port Number</submit>
  </form>
</template>

<script>

export default {
  // iframe above displays port defined by user if project is running on server
  data() {
    return {
      display: 0,
      projecturl: '',
      portNumber: '',
    }
  },
  methods: {
    choosePort() {
      this.projecturl = 'http://localhost:' + this.portNumber + '/';
    }
  } 
}
</script>

<style scoped>
  #sim {
    border: 1px;
    background-color: rgb(40, 209, 49);
    height: 30em;
    width: 40em;
  }
  submit {
    background-color: white;
  }
</style>