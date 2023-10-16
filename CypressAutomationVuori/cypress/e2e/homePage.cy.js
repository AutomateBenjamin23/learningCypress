class HomePage {
    visit() {
      // Define the method to navigate to the website 
      cy.visit('https://vuoriclothing.com');
    }
  
    clickAccountTab() {
      // Define the method to click the "Account" tab 
      cy.get('accountTab').click()
    }
  }
  
  export default new HomePage();
  