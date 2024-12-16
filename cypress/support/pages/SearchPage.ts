class SearchPage {
  searchForProduct(keyword: string) {
    cy.get('#search').clear().type(`${keyword}{enter}`);
  }

  getSearchResults() {
    return cy.get('.products .product-item');
  }
}

export default new SearchPage();
