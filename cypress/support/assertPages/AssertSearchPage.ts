class AssertSearchPage {
  checkSearchUrl(keyword: string) {
    cy.url().should('contain', `q=${keyword}`);
  }

  checkResultsExist() {
    cy.get('.products .product-item').should('have.length.greaterThan', 0);
  }

  checkNoResultsMessage() {
    cy.contains('Your search returned no results.').should('be.visible');
  }
}

export default new AssertSearchPage();
