<template>
  <img alt="birdzeye logo" src="../assets/birdzeye2.png" height="200" width="300"><br>
  <button @click="goToMain">Choose your project's home directory!</button>
</template>

<script>
export default {
  emits: ['close-open-page'],
  data() {
    return {
      // hideOpen: false,
    }
  },
  methods: {
    goToMain() {
      console.log('clicked');
      this.$emit('close-open-page', false);
    }
  }
}
</script>

<style scoped>
  button {
    color: rgb(96, 145, 18);
  }
</style>