const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1080,
  viewportWidth:1920,
  video:false,
  env: {
    emailEnv: "verafurtula@gmail.com",
    passwordEnv: "Levi9Proba"
  },
  e2e: {
    baseUrl:'http://magento.softwaretestingboard.com/',
    specPattern: 'cypress/e2e/**/*.{js, jsx, ts, tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
