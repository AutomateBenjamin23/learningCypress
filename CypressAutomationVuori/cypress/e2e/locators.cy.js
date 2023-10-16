const locators = {
    homePage: {
      accountTab: '[data-testid="AccountIcon"]',
     
    }, 
    signInPage: {
      createAccountTab: '/html[1]/body[1]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/p[1]',
    },
    createAccountPage: {
      firstNameInput: '/html[1]/body[1]/div[1]/div[4]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/input[1]',
      lastNameInput: '/html[1]/body[1]/div[1]/div[4]/div[1]/div[1]/div[1]/form[1]/div[2]/div[1]/input[1]',
      emailInput: '/html[1]/body[1]/div[1]/div[4]/div[1]/div[1]/div[1]/form[1]/div[3]/div[1]/input[1]',
      passwordInput: '/html[1]/body[1]/div[1]/div[4]/div[1]/div[1]/div[1]/form[1]/div[4]/div[1]/input[1]',
      createAccountButton: '/html[1]/body[1]/div[1]/div[4]/div[1]/div[1]/div[1]/form[1]/button[1]', 
      //log in (to account) button locator: /html[1]/body[1]/div[1]/div[4]/div[1]/div[1]/div[1]/p[1]/a[1]
    },
  };
  
  export default locators;
  