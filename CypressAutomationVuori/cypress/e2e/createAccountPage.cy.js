class CreateAccountPage {
    fillFirstName(firstName) {
      // Define the method to populate the First Name field
      cy.get('firstNameInput').type(firstName);
    }
  
    fillLastName(lastName) {
      // Define the method to populate the Last Name field
      cy.get('lastNameInput').type(lastName);
    }
  
    fillEmail(email) {
      // Define the method to populate the Email field
      cy.get('emailInput').type(email);
    }
  
    fillPassword(password) {
      // Define the method to populate the Password field
      cy.get('passwordInput').type(password);
    }
  
    clickCreateAccountButton() {
      // Define the method to click the "Create Account" button
      cy.get('createAccountButton').click();
    }
  }
  
  export default new CreateAccountPage();
  