<template>
  <div>
    <terminal-v-2-input :rootdir="rootdir"></terminal-v-2-input>
  </div>
</template>

<script>
import TerminalV2Input from "./TerminalV2Input.vue";

export default {
  props: ["rootdir"],
  components: {
    TerminalV2Input,
  },
};
</script>
