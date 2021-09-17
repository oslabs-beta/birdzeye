<template>
  <section>
    <textarea ref="editor"></textarea>
  </section>
</template>

<script>
import * as Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
// import 'codemirror/mode/javascript/javascript.js';
import "codemirror/mode/vue/vue.js";
// import 'codemirror/addon/hint/show-hint.js';
// import 'codemirror/addon/hint/show-hint.css';
// import "codemirror/addon/hint/javascript-hint.js";

export default {
  data() {
    return {
      //content: 'Welcome to Vuety',
    };
  },
  mounted() {
    this.cm = Codemirror.fromTextArea(this.$refs.editor, {
      lineNumbers: true,
      theme: "dracula",
      mode: "vue",
      // showHint: true,
      lineWrapping: true,
      styleActiveLine: true,
    });
    this.cm.setSize("100%", "400");
  },
};
</script>

<style scoped></style>
