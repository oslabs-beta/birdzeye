module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
<<<<<<< HEAD
    '^.+\\.vue$': 'vue-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!codemirror)']
=======
    ".*\\.(vue)$": "vue-jest"
  },
  transformIgnorePatterns: ["/node_modules/(?!codemirror)"]
>>>>>>> dev
}
