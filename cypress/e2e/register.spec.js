import { navigateTo } from "../support/pageObjects/navigationPage";
import { onRegister } from "../support/pageObjects/register";

describe("Create an Account Page", () => {
  beforeEach('open application and navigate to Sign in Page', () => {
    navigateTo.visitApp();
    navigateTo.createAccountPage();
  });

  it.only('should create an account with valid data', () => {
    onRegister.validateTheRegisterPage();
    onRegister.registerWithValidData();
  });

  it('should not create an account with blank data', () => {
    onRegister.validateTheRegisterPage();
    onRegister.registerWithBlankData();
  });

  it('should not create an account with wrong number of characters for password data', () => {
    onRegister.validateTheRegisterPage();
    onRegister.registerWithInvalidDataForPassword('123', '123');
  });

  it('should not create an account with wrong input for first name', () => {
    onRegister.validateTheRegisterPage();
    onRegister.registerWithInvalidDataForFirstName('Vera3');
  });

  it('should not create an account with wrong input for last name', () => {
    onRegister.validateTheRegisterPage();
    onRegister.registerWithInvalidDataForLastName('Furtula3');
  });

  it('should not create an account with wrong input for email input', () => {
    onRegister.validateTheRegisterPage();
    onRegister.registerWithInvalidDataForEmail('verafurtulagmail.com');
  });

  it('should not create an account with wrong input for email input', () => {
    onRegister.validateTheRegisterPage();
    onRegister.registerWithInvalidLengthDataForEmail('verafurtulaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com');
  });

  it('logout', () => {
    onRegister.validateTheRegisterPage();
    onRegister.registerWithValidData();
    onRegister.logout();
  });
});
