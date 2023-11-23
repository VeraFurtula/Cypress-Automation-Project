export class LoginPage {
    login(email, password) {
        cy.get('form').eq(1).then(form => {
            cy.wrap(form).find('#email').type(email)
            cy.wrap(form).find('#pass').type(password)
            cy.wrap(form).contains('Sign In').click()
        })
    }

    loginEnv() {
        cy.get('form').eq(1).then(form => {
            cy.wrap(form).find('#email').type(Cypress.env('emailEnv'))
            cy.wrap(form).find('#pass').type(Cypress.env('passwordEnv'))
            cy.wrap(form).contains('Sign In').click()
        })
    }

    validateValidCredentials() {
        cy.url().should('include', '/')
    }

    validateInvalidCredentials(messageText) {
        //cy.url().should('include', '/customer/account/login/referer/')
        cy.get('[class="page messages"]').should('contain', messageText)
    }

    validateInvalidCredentialsBlankData(messageText) {
        cy.get('#email-error').should('contain', messageText)
        cy.get('#pass-error').should('contain', messageText)
    }
    
    validateInvalidCredentialsBlankDataEmail(messageText) {
        cy.get('#email-error').should('contain', messageText)
    }

    validateTheLoginPage() {
        cy.get('.page-title-wrapper').contains('Customer Login')
        cy.get('form').eq(1).then(form => {
            cy.wrap(form).contains('Sign In')
        })
    }

  }
  
  export const onLogin = new LoginPage()