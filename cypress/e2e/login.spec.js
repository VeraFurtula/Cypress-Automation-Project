import { navigateTo } from "../support/pageObjects/navigationPage";
import { onLogin } from "../support/pageObjects/login";


describe("Login Page", () => {
    beforeEach('open application and navigate to Sign in Page', () => {
        navigateTo.visitApp()
        navigateTo.signInPage()
    })

    it('should sign in with valid data', () => {
        onLogin.validateTheLoginPage()
        onLogin.login('verafurtula@gmail.com', 'Levi9Proba')
        onLogin.validateValidCredentials()
      })
    
    it('should sign in with invalid data for password', () => {
        onLogin.validateTheLoginPage()
        onLogin.login('verafurtula@gmail.com', 'Levi9Proba1!')
        onLogin.validateInvalidCredentials('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })

    it('should sign in with invalid data for email', () => {
        onLogin.validateTheLoginPage()
        onLogin.login('verafurt111ula@gmail.com', 'Levi9Proba')
        onLogin.validateInvalidCredentials('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })

    it.only('should sign in with blank data', () => {
        onLogin.validateTheLoginPage()
        onLogin.login(' ', 'Levi9Proba')
        onLogin.validateInvalidCredentialsBlankDataEmail('This is a required field.')
    })

    it('should sign in with blank data', () => {
        onLogin.validateTheLoginPage()
        onLogin.login(' ', ' ')
        onLogin.validateInvalidCredentialsBlankData('This is a required field.')
    })

})