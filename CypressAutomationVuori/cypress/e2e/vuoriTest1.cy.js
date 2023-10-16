// ///<reference types= "cypress"/>

it('Google Search for Vuori', () => {
    //cy.clearCookies(); 
   cy.visit('https://google.com') 

   cy.get('.gLFyf').type('Vuori Clothing website')

   cy.contains('Google Search').click()
   
})    

