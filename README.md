# Project Documentation

This project is structured using Cypress for E2E testing, TypeScript for type safety, and a Page Object Model (POM) pattern to maintain readable and maintainable tests. It also uses `dotenv` and `envalid` for environment configuration.

## Project Structure

The main directories are organized as follows:


### Key Directories

- **cypress/e2e/**  
  Contains test specifications organized by functionality:
  - `cart/`: Tests related to cart functionality.
  - `login/`: Tests for user login and authentication flows.
  - `product-search/`: Tests for product searching capabilities.
  - `registration/`: Tests for user registration and signup processes.

- **cypress/fixtures/**  
  Stores static test data in JSON format. For example:
  - `products.dev.json`: Product data for the development environment.
  - `users.dev.json`: User data for development.

- **cypress/support/**  
  Houses reusable utilities, custom commands, and configuration files:
  - `pages/`: Page Object files encapsulating page-specific locators and actions.
  - `assertPages/`: Classes or functions for page-specific assertions.
  - `commands.ts`: Custom Cypress commands defined via `Cypress.Commands.add`.
  - `e2e.js` and `index.ts`: Configuration and initialization scripts that run before tests.

- **cypress/testData/**  
  Additional TypeScript files providing more complex or dynamic test data:
  - `productsData.ts`
  - `usersData.ts`

- **cypress/videos/**  
  Contains video recordings of test runs (if enabled by Cypress), such as `login.spec.ts.mp4` under `videos/login/`.

## package.json Scripts

The `package.json` file contains scripts to run tests in various configurations:

```json
"scripts": {
  "cy:regression": "cypress run --spec 'cypress/e2e/**/*.ts' --browser chrome",
  "test:open": "cypress open",
  "test:firefox-headed": "cypress run --browser firefox --headed",
  "test:firefox-headless": "cypress run --headless --browser firefox",
  "test:chrome-headless": "cypress run --headless --browser chrome",
  "test:chrome-headed": "cypress run --browser chrome --headed"
}
```
-**Script Descriptions:** 

  - cy:regression: Runs all .ts specs under cypress/e2e using Chrome, typically for full regression runs.
  - test:open: Opens the interactive Cypress Test Runner, allowing you to select and run tests manually.
  - test:firefox-headed: Executes tests in Firefox with a visible browser window.
  - test:firefox-headless: Runs tests in Firefox without a GUI (headless mode).
  - test:chrome-headless: Runs tests in Chrome headless mode.
  - test:chrome-headed: Executes tests in Chrome with the browser window visible.

-**Parameters:** 
 - TEST_ENVIRONMENT: Specifies the environment (dev or prod) and determines which .env file to load.
 - CLEAN_DATA: A boolean indicating whether to perform cleanup operations after each test run
