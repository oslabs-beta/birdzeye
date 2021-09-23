import { createApp } from "vue";
import { createStore } from 'vuex';
import App from "./App.vue";

const app = createApp(App)
app.mount("#app");

const store = createStore({
  state() {
    return {
      filePathList: [],
    }
  },
  mutations: {
    addFilePath(state, payload) {
      state.filePathList.push(payload.path)
    }
  },
  actions: {
    addFilePath(context, payload) {
      context.commit("addFilePath", payload)
    }
  },
  getters: {
    filePathList(state) {
      return state.filePathList
    },
    getCurrFilePath(state){
      return state.filePathList[state.filePathList.length - 1];
    },
  }
})

app.use(store);