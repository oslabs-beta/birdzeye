<template>
  <div 
    v-if="projecturl.length < 19"
    id="sim-bg"
  >
    <img src="../../assets/birdzeye.png" alt="Birdzeye">
  </div>
  <iframe v-else id="sim" :src="projecturl"></iframe>
  <form 
    class="port-texteditorbtn-container sim-form"
    @click.prevent="choosePort" @keydown.enter.prevent="choosePort">
    <label>Port Number: 
    <input id="portChoice" placeholder="ex. 8080" v-model="portNumber">
    </label>
    <input id="submit-btn" type="submit" value="Connect">
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

<style>
  #sim-bg {
    height: 30em;
    /* width: 40em; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    /* position: absolute; */
    text-align: center;
    width: 410px;
  }
  #sim {
    border: none;
    background: #282a36;
    height: 30em;
    width: 100%;
    margin-left: 6px;
    margin-right: 6px;
  }
  #submit-btn {

  }
  .sim-form {
    
  }
  label {
    font-weight: bold;
    margin-left: 10px;
  }
  #portChoice {
    background: #282a36;
    border: none;
    color: #f8f8f2;
    font-weight: bold;
    margin: 0 2px;
    padding: 6px 8px;
  }
  #submit-btn {
    background-color: #282a36;
    border: none;
    border-radius: 6px;
    color: #f8f8f2;
    font-weight: bold;
    margin: 0 2px;
    padding: 6px 20px;
  }
  .port-texteditorbtn-container {
    margin: 5px 0px;
    align-items: center;
    float: left;
  }
</style>