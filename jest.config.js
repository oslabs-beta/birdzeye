module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    // '^.+\\.vue$': 'vue-jest'
    // ".*\\.(js)$": "babel-jest"
    ".*\\.(vue)$": "vue-jest"
  },
  transformIgnorePatterns: ["/node_modules/(?!codemirror)"]
}
