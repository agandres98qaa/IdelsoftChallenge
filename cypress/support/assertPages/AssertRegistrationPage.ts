class AssertRegistrationPage {
  checkRegistrationURL() {
    cy.url().should('include', '/customer/account/create');
  }

  checkSuccessfulRegistration(firstName: string, lastName: string) {
    cy.url().should('not.include', '/customer/account/create');
    cy.contains(`Welcome, ${firstName} ${lastName}!`).should('be.visible');
  }

  checkErrorMessage(expectedText: string) {
    cy.get('.message-error').should('contain.text', expectedText);
  }

  checkValidationMessage(expectedText: string) {
    cy.contains(expectedText).should('be.visible');
  }

  checkValidationMessageCount(expectedText: string, count: number) {
    cy.get('.mage-error')
      .filter(`:contains("${expectedText}")`)
      .should('have.length', count);
  }
}

export default new AssertRegistrationPage();
