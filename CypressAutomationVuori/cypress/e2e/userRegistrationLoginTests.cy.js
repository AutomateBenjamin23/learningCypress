import HomePage from 'C:/Users/pride/CypressAutomationVuori/cypress/e2e/homePage.cy.js';
import SignInPage from 'C:/Users/pride/CypressAutomationVuori/cypress/e2e/signInPage.cy.js';
import CreateAccountPage from 'C:/Users/pride/CypressAutomationVuori/cypress/e2e/createAccountPage.cy.js';

describe('User Registration and Login', function () {
  before(function () {
       // Load the fixture data
    cy.fixture('userCredentials.json').as('userData');
  });

  it('create an account and log in', function () {
       // Access fixture data
    cy.get('@userData').then((userData) => {
      // Navigate to the Vuori website 
      HomePage.visit();

      // Click on the "Account" tab on the home page
      HomePage.clickAccountTab();

      // Click the "Create Account" tab on the Sign In page
      SignInPage.clickCreateAccountTab();

      // Fill out the registration form on the createAccountPage
      CreateAccountPage.fillFirstName(userData.user1.firstName);
      CreateAccountPage.fillLastName(userData.user1.lastName);
      CreateAccountPage.fillEmail(userData.user1.username);
      CreateAccountPage.fillPassword(userData.user1.password);
      CreateAccountPage.clickCreateAccountButton();

      // Verify successful registration (you can use assertions)

      // Log in with the newly created account (you'll need additional methods and steps)

      // Verify successful login (you can use assertions)
    });
  });

  it(' log in to a Vuori account', function () {
    // Access fixture data
    cy.get('@userData').then((userData) => {
      // Navigate to the Vuori website 
      const homepageURL = 'https://vuoriclothing.com'; 
      
      HomePage.visit();

      // Click on the "Account" tab on the home page
      HomePage.clickAccountTab();

      // Input email and password on the Sign In page
      SignInPage.fillEmail(userData.user1.email);
      SignInPage.fillPassword(userData.user1.password);
      SignInPage.clickSignInButton();

      // Verify successful login
      cy.contains(userData.user1.email).should('be.visible');
      cy.contains(userData.user1.firstName).should('be visible');
      cy.contains(userData.user1.lastName).should('be.visible');


    });
  });
});

