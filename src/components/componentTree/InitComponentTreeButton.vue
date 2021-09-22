<template>
  <div>
    <button @click="getAppRoot">Start tree</button>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {};
  },
  methods: {
    getAppRoot() {
      window.ipc.send("GET_APP_PATH");
    },
  },
};
</script>
