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
// import * as fs from 'fs';
// import 'codemirror/addon/hint/show-hint.js';
// import 'codemirror/addon/hint/show-hint.css';
// import "codemirror/addon/hint/javascript-hint.js";
// import activeDocument from '../../background.js';

export default {
  data() {
    return {
      activeDocument: '',
      //content: 'Welcome to Vuety',
    };
  },
  mounted() {
    // window.ipc.on("READ_FILE", (payload) => {
    //     this.activeDocument = payload.contentFiles;
        
    //   });
    // this.getFiles('./src/App.vue');
  //   fs.readFileSync('../../App.vue', 'utf8', (err, data) => {
  //       if (err) {
  //   console.error(err)
  //   return
  // }
  //     this.activeDocument = data;
  //   })

    
    this.cm = Codemirror.fromTextArea(this.$refs.editor, {
      lineNumbers: true,
      theme: "dracula",
      mode: "vue",
      // showHint: true,
      lineWrapping: true,
      styleActiveLine: true,
      // value: this.activeDocument,
    });
    this.cm.setSize("100%", "400");
    console.log(this.activeDocument, '--activeDocument--');
  },
  methods: {
    // getFiles(path) {
    //   // ask backend to read file
    //   const payload = { path };
    //   window.ipc.send("READ_FILE", payload);
    // }
  }
};
</script>

<style scoped></style>
