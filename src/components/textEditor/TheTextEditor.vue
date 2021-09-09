<template>
  <textarea v-model="content" id="editor"></textarea>
</template>

<script>
import * as Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint.js';

export default {
  data() {
    return {
      content: 'Welcome to Veuty',
    };
  },
  mounted() {
    this.cm = Codemirror.fromTextArea(document.getElementById('editor'), {
      lineNumbers: true,
      theme: 'dracula',
      mode: 'javascript',
      showHint: true,
      lineWrapping: true,
      styleActiveLine: true,
    });
    this.cm.setSize('80%', '400');
  },
};
</script>

<style scoped>

</style>