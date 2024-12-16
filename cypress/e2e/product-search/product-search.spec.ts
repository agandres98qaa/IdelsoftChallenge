import SearchPage from '../../support/pages/SearchPage';
import AssertSearchPage from '../../support/assertPages/AssertSearchPage';

describe('Product search', () => {
  const keyword = 'shirt';

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should search for a product by exact name and display results', () => {
    SearchPage.searchForProduct(keyword);
    AssertSearchPage.checkSearchUrl(keyword);
    AssertSearchPage.checkResultsExist();
  });

  it('Should show no results for a non-existing product', () => {
    SearchPage.searchForProduct('asdfgh');
    AssertSearchPage.checkNoResultsMessage();
  });
});
