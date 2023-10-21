import locators from 'C:/Users/pride/CypressAutomationVuori/cypress/e2e/locators.cy.js'; 
import config from 'C:/Users/pride/CypressAutomationVuori/cypress/e2e/config.js';

class HomePage {
    visit() {
      // Define the method to navigate to the website 
      cy.visit(config.websiteURL);
    }
  
    clickAccountTab() {
      // Define the method to click the "Account" tab 
      cy.get(locators.homePage.accountTab).click(); 
    }
  }
  
  export default new HomePage();
  