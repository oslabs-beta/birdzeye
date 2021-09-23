<template>
  <section>
    <span 
      class="material-icons port-texteditorbtn-container"
      @click="updateFilePath(currFilePath)"
      alt="sync with text editor"
    >sync</span>
    <span 
      class="material-icons port-texteditorbtn-container"
      @click="handleSave"
    >save_alt</span>
    <!-- <button 
      class="port-texteditorbtn-container"
      @click="updateFilePath(currFilePath)"
    >Start Text Editor</button> -->
    <!-- <button 
      class="port-texteditorbtn-container"
      @click="handleSave"
    >Save</button> -->
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
import "codemirror/addon/edit/closebrackets.js";
import { mapGetters } from 'vuex';

export default {
  props: ["fileName"],
  data() {
    return {
      activeDocument: '',
      filePath: this.currFilePath,
      textEditorSave: this.handleSave.bind(this),
    };
  },
  computed: {
    ...mapGetters({
      currFilePath: 'getCurrFilePath',
    })
  },
  mounted() {
    window.ipc.on("READ_FILECONTENTS", (payload) => {
        this.activeDocument = payload.grabFiles;
        this.cm.getDoc().setValue(this.activeDocument);
      })
    
    this.cm = Codemirror.fromTextArea(this.$refs.editor, {
      lineNumbers: true,
      theme: "dracula",
      mode: "vue",
      lineWrapping: true,
      autoCloseBrackets: true,  
      value: this.activeDocument,
      extraKeys: {
        "Ctrl-S": this.textEditorSave,
      } 
    })
    this.cm.setSize("100%", "556");
    this.handleFileType(this.filePath);
  },
  updated() {
    this.cm.on('change', this.updateTextArea);
  },
  methods: {
    getFile(path) {
      // ask backend to read file
      const payload = { path };
      window.ipc.send("READ_FILECONTENTS", payload);
    },
    updateFilePath(newFilePath) {
      this.filePath = newFilePath;
      this.getFile(this.filePath);
      this.handleFileType(this.filePath);
    },
    handleFileType(filePath) {
      let fileType = '';
      if (filePath) {
      for (let i = filePath.length; i > 0; i--) {
        if (filePath[i] === '.') {
          fileType = filePath.slice(i + 1);
          break;
        }
      }
      switch (fileType) {
        case 'css':
          return this.cm.setOption('mode', 'css');    
        case 'js':
          return this.cm.setOption('mode', 'javascript');
        case 'jsx':
          return this.cm.setOption('mode', 'javascript');
        case 'html':
          this.cm.setOption('mode', 'xml');  
          return this.cm.setOption('htmlMode', true);
        case 'md':
          return this.cm.setOption('mode', 'markdown'); 
        case 'vue':
          return this.cm.setOption('mode', 'vue');
        case 'sass':
          return this.cm.setOption('mode', 'sass');
        default:
          return undefined;      
      }
      } 
    },
    updateTextArea() {
      // read file on local machine and save to property 
      this.activeDocument = this.cm.getValue();
    },
    handleSave() {
      // send request to backend to write to file on local machine
      window.ipc.send("WRITE_FILE", [this.filePath, this.activeDocument]);
    },
  }
};
</script>

<style scoped>
button {
  /* float: right; */
}
.material-icons {
  /* float: right; */
  padding: 0 6px;
}
section {
  display: contents;
  text-align: left;
}
h2 {
  color: white;
}
.CodeMirror {
  position: relative;
  overflow: hidden;
  background: white;
  width: 100%;
  height: 100vh;
}
</style>
