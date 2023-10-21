const locators = {
  homePage: {
    accountTab:"//p[normalize-space()='Account']",
    mensTab:"//div[@class='MuiBox-root mui-style-1uilok8']//button[@aria-label=\"Shop Men's\"]", 
  }, 

  signInPage: {
    Email:"//input[@id=':rm:']", 
    Password:"//input[@id=':rn:']", 
    Signin:"//button[normalize-space()='Sign in']", 
    createAccountTab: "//a[normalize-space()='Create account']", 
  },

  createAccountPage: {
    firstNameInput: "//input[@id=':rc:']",
    lastNameInput: "//input[@id=':rd:']",
    emailInput: "//input[@id=':re:']",
    passwordInput: "//input[@id=':rl:']", 
    createAccountButton: "//button[normalize-space()='Create account']",  
  },
};

export default locators;
