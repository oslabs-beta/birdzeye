<template>
  <section>
    <textarea ref="editor" :value="activeDocument"></textarea>
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
      activeDocument: 'welcome',
      filePath: '../cmp-communication-assignment-problem/src/components/App.vue'
      //content: 'Welcome to Vuety',
    };
  },
  // async created() {
  //   await window.ipc.on("READ_FILECONTENTS", (payload) => {
  //       // console.log(payload.grabFiles, 'This is the payload.grabFiles on the front end')
  //       this.activeDocument = payload.grabFiles;
  //   console.log(this.activeDocument, 'activeDocument in the ipc.on func');    
  //     });
  //   console.log(this.activeDocument, 'activeDocument before codeMirror');
  //   this.getFile('./src/App.vue');
  //   console.log(this.activeDocument, 'created activeDocument');
  //   // this.cm = Codemirror.fromTextArea(this.$refs.editor, {
  //   //   lineNumbers: true,
  //   //   theme: "dracula",
  //   //   mode: "vue",
  //   //   // showHint: true,
  //   //   lineWrapping: true,
  //   //   styleActiveLine: true,
  //   //   value: this.activeDocument,
  //   // });
  //   // this.cm.setSize("100%", "400");
  //   // console.log(this.activeDocument, '--activeDocument after codeMirror setup--');
  // },
  mounted() {
    
    window.ipc.on("READ_FILECONTENTS", (payload) => {
        // console.log(payload.grabFiles, 'This is the payload.grabFiles on the front end')
        this.activeDocument = payload.grabFiles;
        console.log(this.activeDocument, 'this.activeDocument in the ipc.on func');
        this.cm.getDoc().setValue(this.activeDocument);
      })
    this.getFile(this.filePath)
    this.cm = Codemirror.fromTextArea(this.$refs.editor, {
      lineNumbers: true,
      theme: "dracula",
      mode: "vue",
      // showHint: true,
      lineWrapping: true,
      styleActiveLine: true,
      value: this.activeDocument,
    })
    
    this.cm.setSize("100%", "400");
    // console.log(this.activeDocument, 'active document after this.getFile()')
    
    console.log(this.activeDocument, '--activeDocument after codeMirror setup--');
    
  },
  methods: {
    getFile(path) {
      // ask backend to read file
      const payload = { path };
      window.ipc.send("READ_FILECONTENTS", payload);
    }
  }
};
</script>

<style scoped>
section {
  text-align: left;
}
</style>
