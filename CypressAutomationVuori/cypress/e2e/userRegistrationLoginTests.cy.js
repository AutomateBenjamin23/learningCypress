import HomePage from 'C:/Users/pride/CypressAutomationVuori/cypress/e2e/homePage.cy.js';
import SignInPage from 'C:/Users/pride/CypressAutomationVuori/cypress/e2e/signInPage.cy.js';
import CreateAccountPage from 'C:/Users/pride/CypressAutomationVuori/cypress/e2e/createAccountPage.cy.js';
import config from 'C:/Users/pride/CypressAutomationVuori/cypress/e2e/config.js'
import faker from 'faker';

describe('User registers an account', function () {
  it('create an new account', function () {
       
    cy.clearCookies(); 
    
    const randomFirstName = faker.name.firstName(); 
    const randomLastName = faker.name.lastName(); 
    const randomEmail = faker.internet.email(); 
    const randomPassword = faker.internet.password(); 
    
      HomePage.visit(config.websiteURL);
      HomePage.clickAccountTab();
      SignInPage.clickcreateAccountTab();

      // Fill out the registration form on the createAccountPage
      CreateAccountPage.fillFirstName(randomFirstName);
      CreateAccountPage.fillLastName(randomLastName);
      CreateAccountPage.fillEmail(randomEmail);
      CreateAccountPage.fillPassword(randomPassword);
      CreateAccountPage.clickCreateAccountButton();

      // Verify successful registration (you can use assertions)


    });
  });

  it(' Sign into Benjamins Vuori account', function () {
    
    cy.clearCookies(); 
    
    cy.get('@userCredentials').then((userCredentials) => {
      // Navigate to the Vuori website 
      const homepageURL = 'config.websiteURL'; 
      
      HomePage.visit();
      HomePage.clickAccountTab();

      // Input email and password on the Sign In page
      SignInPage.fillEmail(userCredentials.user1.email);
      SignInPage.fillPassword(userCredentials.user1.password);
      SignInPage.clickSignInButton();

      // Verify successful login
      cy.contains(userCredentials.user1.email).should('be.visible');
      cy.contains(userCredentials.user1.firstName).should('be visible');
      cy.contains(userCredentials.user1.lastName).should('be.visible');

    });
  });


