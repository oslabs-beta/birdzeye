export default {
  fetchAllDirectories(context) {
    context.commit("fetchAllDirectories");
  },
  addDirectory(context) {
    context.commit("addDirectory");
  },
  // renderTextEditor(context) {
  //   context.commit('add-directory')
  // },
  // tabManagement(context) {
  //   context.commit('add-directory')
  // },
  deleteDirectory(context) {
    context.commit("deleteDirectory");
  },
  renameDirectory(context) {
    context.commit("renameDirectory");
  },
};
