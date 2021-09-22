<template>
  <div>
    <button>{{ configKeys }}</button> :
    <button>{{ configValue }}</button>
  </div>
</template>

<script>
export default {
  props: ["configKeys", "configValue"],
  data() {
    return {};
  },
  methods: {},
};
</script>
