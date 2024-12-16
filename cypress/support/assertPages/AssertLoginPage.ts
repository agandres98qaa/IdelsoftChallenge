import LoginPage from '../pages/LoginPage';

class AssertLoginPage {
  checkLoginURL() {
    cy.url().should('contain', LoginPage.url);
  }

  checkLoginSuccessURL() {
    cy.url().should('not.include', LoginPage.url);
    cy.url().should('contain', 'customer/account/');
  }

  checkErrorMessage(expectedText: string) {
    cy.get('.message-error').should('contain.text', expectedText);
  }
}
export default new AssertLoginPage();
