import { faker } from '@faker-js/faker';
import { generateRandomUserData } from '../commands';

export class RegisterPage {
    registerWithValidData() {
        cy.get('form').eq(1).then(form => {
            const randomFirstName = faker.name.firstName();
            const randomLastName = faker.name.lastName();
            const randomEmail = faker.internet.email();
            const randomPassword = faker.internet.password();
            cy.wrap(form).find('#firstname').type(randomFirstName)
            cy.wrap(form).find('#lastname').type(randomLastName)
            cy.wrap(form).find('#email_address').type(randomEmail)
            cy.wrap(form).find('#password').type(randomPassword)
            cy.wrap(form).find('#password-confirmation').type(randomPassword)
            cy.wrap(form).contains('Create an Account').click()
            cy.url().should('include', '/customer/account/')

        })
    }
    

    registerWithBlankData(firstName, lastName, email, password, confirmationPassword) {
        cy.get('form').eq(1).then(form => {
            cy.wrap(form).find('#firstname').type(firstName)
            cy.wrap(form).find('#lastname').type(lastName)
            cy.wrap(form).find('#email_address').type(email)
            cy.wrap(form).find('#password').type(password)
            cy.wrap(form).find('#password-confirmation').type(confirmationPassword)
            cy.wrap(form).contains('Create an Account').click()
            cy.url().should('include', '/customer/account/')
            cy.get('#firstname-error').should('contain', 'This is a required field.')
            cy.get('#lastname-error').should('contain', 'This is a required field.')
            cy.get('#email_address-error').should('contain', 'This is a required field.')
            cy.get('#password-error').should('contain', 'This is a required field.')
            cy.get('#password-confirmation-error').should('contain', 'This is a required field.')
        })
    }


    registerWithInvalidDataForPassword(password, confirmationPassword) {
        cy.get('form').eq(1).then(form => {
            const randomFirstName = faker.name.firstName();
            const randomLastName = faker.name.lastName();
            const randomEmail = faker.internet.email();
            cy.wrap(form).find('#firstname').type(randomFirstName)
            cy.wrap(form).find('#lastname').type(randomLastName)
            cy.wrap(form).find('#email_address').type(randomEmail)
            cy.wrap(form).find('#password').type(password)
            cy.wrap(form).find('#password-confirmation').type(confirmationPassword)
            cy.wrap(form).contains('Create an Account').click()
            cy.url().should('include', '/customer/account/')
            cy.get('#password-error').should('contain', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
            //cy.get('#password-confirmation-error').should('contain', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
        })
    }

    registerWithInvalidDataForFirstName(firstName) {
        cy.get('form').eq(1).then(form => {
            const randomLastName = faker.name.lastName();
            const randomEmail = faker.internet.email();
            const randomPassword = faker.internet.password();
            cy.wrap(form).find('#firstname').type(firstName)
            cy.wrap(form).find('#lastname').type(randomLastName)
            cy.wrap(form).find('#email_address').type(randomEmail)
            cy.wrap(form).find('#password').type(randomPassword)
            cy.wrap(form).find('#password-confirmation').type(randomPassword)
            cy.wrap(form).contains('Create an Account').click()
            cy.url().should('include', '/customer/account/')
            cy.get('[class="page messages"]').should('contain', 'First Name is not valid!')
            //cy.get('#password-confirmation-error').should('contain', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
        })
    }

    registerWithInvalidDataForLastName(lastName) {
        cy.get('form').eq(1).then(form => {
            const randomFirstName = faker.name.firstName();
            const randomEmail = faker.internet.email();
            const randomPassword = faker.internet.password();
            cy.wrap(form).find('#firstname').type(randomFirstName)
            cy.wrap(form).find('#lastname').type(lastName)
            cy.wrap(form).find('#email_address').type(randomEmail)
            cy.wrap(form).find('#password').type(randomPassword)
            cy.wrap(form).find('#password-confirmation').type(randomPassword)
            cy.wrap(form).contains('Create an Account').click()
            cy.url().should('include', '/customer/account/')
            cy.get('[class="page messages"]').should('contain', 'Last Name is not valid!')
        })
    }


    registerWithInvalidDataForEmail(email) {
        cy.get('form').eq(1).then(form => {
            const randomFirstName = faker.name.firstName();
            const randomLastName = faker.name.lastName();
            const randomEmail = faker.internet.email();
            const randomPassword = faker.internet.password();
            cy.wrap(form).find('#firstname').type(randomFirstName)
            cy.wrap(form).find('#lastname').type(randomLastName)
            cy.wrap(form).find('#email_address').type(email)
            cy.wrap(form).find('#password').type(randomPassword)
            cy.wrap(form).find('#password-confirmation').type(randomPassword)
            cy.wrap(form).contains('Create an Account').click()
            cy.url().should('include', '/customer/account/')
            cy.get('#email_address-error').should('contain', 'Please enter a valid email address (Ex: johndoe@domain.com).')
        })
    }

    registerWithInvalidLenghtDataForEmail(email) {
        cy.get('form').eq(1).then(form => {
            const randomFirstName = faker.name.firstName();
            const randomLastName = faker.name.lastName();
            const randomEmail = faker.internet.email();
            const randomPassword = faker.internet.password();
            cy.wrap(form).find('#firstname').type(randomFirstName)
            cy.wrap(form).find('#lastname').type(randomLastName)
            cy.wrap(form).find('#email_address').type(email)
            cy.wrap(form).find('#password').type(randomPassword)
            cy.wrap(form).find('#password-confirmation').type(randomPassword)
            cy.wrap(form).contains('Create an Account').click()
            cy.url().should('include', '/customer/account/')
            cy.get('[class="page messages"]').should('contain', '"Email" uses too many characters.')
        })
    }

    logout(){
        cy.get('header').find('[class="panel header"]')
        .find('[class="header links"]')
        .find('.customer-name')
        .find('[class="action switch"]').click()
            .then(ul => {
                cy.get('ul').eq(1).contains('Sign Out').click()
            })
    }
    validateTheRegisterPage() {
        cy.get('.page-title-wrapper').contains('Create New Customer Account')
        cy.get('form').eq(1).then(form => {
            cy.wrap(form).contains('Create an Account')
        })
    }

  }
  
  export const onRegister = new RegisterPage()