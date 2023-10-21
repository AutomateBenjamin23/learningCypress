import locators from 'C:/Users/pride/CypressAutomationVuori/cypress/e2e/locators.cy.js';

class CreateAccountPage {
    fillFirstName(firstName) {
      // Define the method to populate the First Name field...
      cy.get(locators.createAccountPage.firstNameInput).type(firstName);
    }
  
    fillLastName(lastName) {
      cy.get(locators.createAccountPage.lastNameInput).type(lastName);
    }
  
    fillEmail(email) {
      cy.get(locators.createAccountPage.emailInput).type(email);
    }
  
    fillPassword(password) {
      cy.get(locators.createAccountPage.passwordInput).type(password);
    }
  
    clickCreateAccountButton() {
      cy.get(locators.createAccountPage.createAccountButton).click();
    }
  }
  
  export default new CreateAccountPage();
  