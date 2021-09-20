<template>
  <div>{{ configKeys }} : {{ configValue }}</div>
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
