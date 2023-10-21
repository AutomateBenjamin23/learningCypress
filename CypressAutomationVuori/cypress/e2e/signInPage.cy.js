import locators from 'C:/Users/pride/CypressAutomationVuori/cypress/e2e/locators.cy.js'; 

class SignInPage {
    fillEmail(Email) {
      cy.get(locators.signInPage.Email).type(email);
    }
    fillPassword(Password) {
      cy.get(locators.signInPage.password).type(password); 
    } 
    clickSignInButton(Signin) {
      cy.get(locator.SignInPage.Signin).click(Signin); 
    }
  }
  
  export default new SignInPage();
  