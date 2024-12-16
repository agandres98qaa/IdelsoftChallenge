import CartPage from '../pages/CartPage';

class AssertCartPage {
  checkCartURL() {
    cy.url().should('contain', CartPage.url);
  }

  checkItemInCart() {}
}

export default new AssertCartPage();
