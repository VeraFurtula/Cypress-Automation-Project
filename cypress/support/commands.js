// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { faker } from '@faker-js/faker';

Cypress.Commands.add('getRegistrationForm', () => {
  return cy.get('form').eq(1);
});

Cypress.Commands.add('generateRandomUserData', () => {
  const randomFirstName = faker.name.firstName();
  const randomLastName = faker.name.lastName();
  const randomEmail = faker.internet.email();
  const randomPassword = faker.internet.password();

  return {
    firstName: randomFirstName,
    lastName: randomLastName,
    email: randomEmail,
    password: randomPassword,
  };
});