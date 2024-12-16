class AssertProductPage {
  checkSuccessMessage(expectedText: string) {
    cy.get('.message-success').should('contain.text', expectedText);
  }
}
export default new AssertProductPage();
