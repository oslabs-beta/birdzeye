<template>
  <div>
    <button>{{ rootdir }}</button>
    <button @click="executeShellCommand(command, rootDirectory)">
      Execute Command
    </button>
    <textarea></textarea>
    <div>{{ commandResponseDisplay }}</div>

    <terminal-v-2-output></terminal-v-2-output>
  </div>
</template>

<script>
import TerminalV2Output from "./TerminalV2Output.vue";

export default {
  props: ["rootdir"],
  mounted() {
    // handle reply from the backend for files
    window.ipc.on("RUN_COMMAND", (payload) => {
      this.commandResponseDisplay = payload.commandResponse;
    });
  },
  components: {
    TerminalV2Output,
  },
  data() {
    return {
      commandResponseDisplay: "",
      command: "mkdir test",
      rootDirectory: this.rootdir,
    };
  },
  methods: {
    executeShellCommand(command, root) {
      const payload = { command, root };
      window.ipc.send("RUN_COMMAND", payload);
    },
  },
};
</script>
