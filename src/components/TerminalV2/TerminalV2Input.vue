<template>
  <div>
    <!-- <div class="dir-executebtn-wrapper"> -->

      <span 
        class="material-icons execute-icon"
        @click="executeShellCommand(command, rootDirectory)"
      >directions_run</span>
    <!-- </div> -->
    <!-- <button @click="executeShellCommand(command, rootDirectory)">
      Execute Command
    </button> -->
    <div class="terminal-wrapper">
      <button>{{ rootdir }}</button>
      <textarea v-model="command"></textarea>
      <p>{{ commandResponseDisplay }}</p>
    </div>

    <!-- <terminal-v-2-output
      :cmd-res-display="commandResponseDisplay"
    >
    </terminal-v-2-output> -->
  </div>
</template>

<script>
// import TerminalV2Output from "./TerminalV2Output.vue";

export default {
  props: ["rootdir"],
  mounted() {
    // handle reply from the backend for files
    window.ipc.on("RUN_COMMAND", (payload) => {
      this.commandResponseDisplay = payload.commandResponse;
    });
  },
  components: {
    // TerminalV2Output,
  },
  data() {
    return {
      commandResponseDisplay: "",
      command: "",
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

<style scoped>
.execute-icon {
  display: flex;
  flex-direction: row-reverse;
  padding: 0 10px;
}
.terminal-wrapper {
  width: 100%;
  height: 42.5em;
  background-color: #282a36;
  border: none;
  color: #f8f8f2;
  margin-top: 10px;
  padding: 4px 10px;
}
textarea {
  width: 99%;
  background-color: #282a36;
  border: none;
  color: #f8f8f2;
  height: 14px;
}
p {
  height: 30em;
  margin: 0;
}
</style>