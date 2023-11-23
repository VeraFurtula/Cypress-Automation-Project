const dotenv = require('dotenv');
dotenv.config();

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  env: {
    "email": "${EMAIL}",
    "password": "${PASSWORD}"
  },
  e2e: {
    baseUrl: 'http://magento.softwaretestingboard.com/',
    specPattern: 'cypress/e2e/**/*.{js, jsx, ts, tsx}',
    setupNodeEvents(on, config) {
      const email = process.env.EMAIL || Cypress.env('EMAIL');
      const password = process.env.PASSWORD || Cypress.env('PASSWORD');

      if (!password) {
        throw new Error('Missing password environment variable');
      }

      config.env = { email, password };
      return config;
    },
  },
});