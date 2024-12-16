import { ENV_CONFIG } from '../../config';

export async function getProductsData() {
  const data = await new Cypress.Promise((resolve) => {
    cy.fixture(`products.${ENV_CONFIG.TEST_ENVIRONMENT}.json`).then((f) =>
      resolve(f)
    );
  });
  return data;
}
