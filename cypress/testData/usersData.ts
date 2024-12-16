import { ENV_CONFIG } from '../../config';

export async function getUsersData() {
  const data = await new Cypress.Promise((resolve) => {
    cy.fixture(`users.${ENV_CONFIG.TEST_ENVIRONMENT}.json`).then((f) =>
      resolve(f)
    );
  });
  return data;
}
