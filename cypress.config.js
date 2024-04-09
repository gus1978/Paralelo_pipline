const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'mwofht',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
