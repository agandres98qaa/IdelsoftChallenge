class ProductPage {
  clickAddToCart() {
    cy.get('#product-addtocart-button').click();
  }

  clickShoppingCart() {
    cy.contains('a', 'shopping cart').click();
  }
}

export default new ProductPage();
