<template>
  <div>
    <button @click="executeShellCommand(command)">Execute Command</button>
    <textarea></textarea>
    /////////////////////////////////////////
    <div>{{ commandResponseDisplay }}</div>
    /////////////////////////////////////////
    <terminal-v-2-output></terminal-v-2-output>
  </div>
</template>

<script>
import TerminalV2Output from "./TerminalV2Output.vue";

export default {
  mounted() {
    // handle reply from the backend for files
    window.ipc.on("RUN_COMMAND", (payload) => {
      // console.log("payload.contentFiles", payload.contentFiles);
      this.commandResponseDisplay = payload.commandResponse;
      console.log("payload", payload);
    });
    // this.executeShellCommand("ls");
  },
  components: {
    TerminalV2Output,
  },
  data() {
    return {
      commandResponseDisplay: "",
      command: "mkdir test",
    };
  },
  methods: {
    executeShellCommand(command) {
      const payload = { command };
      window.ipc.send("RUN_COMMAND", payload);
    },
  },
};
</script>
