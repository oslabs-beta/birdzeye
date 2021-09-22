import directoryMutations from "./mutations.js";
import directoryActions from "./actions.js";
import directoryGetters from "./getters.js";

export default {
  state() {
    return {
      allDirectories: [],
    };
  },
  mutations: directoryMutations,
  actions: directoryActions,
  getters: directoryGetters,
};

