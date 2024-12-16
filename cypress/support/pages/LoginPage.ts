class LoginPage {
  private emailInput = '#email';
  private passwordInput = '#pass';
  private loginButton = '#send2';
  public url = '/customer/account/login';

  navigate() {
    cy.visit(this.url);
  }

  enterEmail(email: string) {
    cy.get(this.emailInput).clear().type(email);
  }

  enterPassword(password: string) {
    cy.get(this.passwordInput).clear().type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  login(email: string, password: string) {
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLogin();
  }
}

export default new LoginPage();
