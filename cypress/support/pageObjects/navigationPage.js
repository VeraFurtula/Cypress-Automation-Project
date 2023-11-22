export class NavigationPage {
    visitApp() {
        cy.visit('/')
    }

    signInPage() {
        cy.get('header').find('a').contains('Sign In').click()
    }

    createAccountPage() {
        cy.get('header').find('a').contains('Create an Account').click()
    }
}

export const navigateTo = new NavigationPage()