<template>
  <div 
    v-if="projecturl.length < 19"
    id="sim-bg"
  >
    <img src="../../assets/birdzeye.png" alt="Birdzeye">
  </div>
  <iframe v-else id="sim" :src="projecturl"></iframe>
  <form @click.prevent="choosePort" @keydown.enter.prevent="choosePort">
    <input id="portChoice" placeholder="http://localhost:____/" v-model="portNumber">
    <input id="submit-btn" type="submit" value="Enter Port Number">
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
  #sim-bg {
    height: 30em;
    width: 40em;
    position: relative;
  }
  img {
    /* position: absolute; */
    text-align: center;
    width: 300px;
  }
  #sim {
    border: 1px;
    background-color: rgb(40, 209, 49);
    height: 30em;
    width: 40em;
  }
  #submit-btn {

  }
</style>