import { getProductsData } from '../../testData/productsData';
import ProductPage from '../../support/pages/ProductPage';
import AssertProductPage from '../../support/assertPages/AssertProductPage';
import AssertCartPage from '../../support/assertPages/AssertCartPage';

describe('Add item to cart', () => {
  let productData: any;
  before(async () => {
    productData = await getProductsData();
  });

  it('Should add a single product from product page', () => {
    cy.visit(productData.product1.url);
    ProductPage.clickAddToCart();
    AssertProductPage.checkSuccessMessage(
      'You added Push It Messenger Bag to your'
    );
    ProductPage.clickShoppingCart();
    AssertCartPage.checkCartURL();
  });
});
