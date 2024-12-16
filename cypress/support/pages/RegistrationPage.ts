class RegistrationPage {
  navigate() {
    cy.visit('/customer/account/create');
  }

  enterFirstName(firstName: string) {
    cy.get('#firstname').clear().type(firstName);
  }

  enterLastName(lastName: string) {
    cy.get('#lastname').clear().type(lastName);
  }

  enterEmail(email: string) {
    cy.get('#email_address').clear().type(email);
  }

  enterPassword(password: string) {
    cy.get('#password').clear().type(password);
  }

  confirmPassword(password: string) {
    cy.get('#password-confirmation').clear().type(password);
  }

  clickCreateAccount() {
    cy.get('.action.submit.primary').click();
  }

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.enterFirstName(firstName);
    this.enterLastName(lastName);
    this.enterEmail(email);
    this.enterPassword(password);
    this.confirmPassword(password);
    this.clickCreateAccount();
  }
}

export default new RegistrationPage();
