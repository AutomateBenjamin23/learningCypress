class SignInPage {
    clickCreateAccountTab() {
      // Define the method to click the "Create Account" tab on the Sign In page
      cy.get('createAccountTab').click();
    }
  }
  
  export default new SignInPage();
  