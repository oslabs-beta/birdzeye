<template>
  <section>
    <textarea ref="editor" :value="activeDocument"></textarea>
  </section>
</template>

<script>
import * as Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/jsx/jsx.js';
import 'codemirror/mode/markdown/markdown.js';
import "codemirror/mode/sass/sass.js";
import "codemirror/mode/vue/vue.js";
import "codemirror/mode/xml/xml.js";
// import 'codemirror/addon/hint/show-hint.js';
// import 'codemirror/addon/hint/show-hint.css';
// import "codemirror/addon/hint/javascript-hint.js";

export default {
  data() {
    return {
      activeDocument: '',
      // filePath: './src/App.vue',
      filePath: './src/background.js',
      // filePath: './README.md',
      // filePath: './public/index.html',
    };
  },
  mounted() {
    window.ipc.on("READ_FILECONTENTS", (payload) => {
      // console.log(payload.grabFiles, 'This is the payload.grabFiles on the front end')
      this.activeDocument = payload.grabFiles;
      // run line below in this function in order to update activeDocument before editor renders to screen
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
      autoCloseBrackets: true,  
      value: this.activeDocument,
    })
    this.cm.setSize("100%", "400");
    this.handleFileType(this.filePath);
    // console.log(this.activeDocument, 'active document after this.getFile()')
    // console.log(this.activeDocument, '--activeDocument after codeMirror setup--');
  },
  methods: {
    getFile(path) {
      // ask backend to read file
      const payload = { path };
      window.ipc.send("READ_FILECONTENTS", payload);
    },
    handleFileType(filePath) {
      let fileType = '';
      for (let i = filePath.length; i > 0; i--) {
        if (filePath[i] === '.') {
          fileType = filePath.slice(i + 1);
          break;
        }
      }
      console.log(fileType, '......... fileType .........')
      switch (fileType) {
        case 'css':
          return this.cm.setOption('mode', 'css');    
        case 'js':
          return this.cm.setOption('mode', 'javascript');
        case 'jsx':
          return this.cm.setOption('mode', 'javascript');        
        case 'vue':
          return this.cm.setOption('mode', 'vue'); 
        case 'md':
          return this.cm.setOption('mode', 'markdown');     
        case 'html':
          this.cm.setOption('mode', 'xml');  
          return this.cm.setOption('htmlMode', true);     
        default:
          return undefined;      
      }
    },
  }
};
</script>

<style scoped>
section {
  text-align: left;
}
</style>
