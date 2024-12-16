import RegistrationPage from '../../support/pages/RegistrationPage';
import AssertRegistrationPage from '../../support/assertPages/AssertRegistrationPage';
import { getUsersData } from '../../testData/usersData';

describe('User Registration', () => {
  let usersData: any;

  before(async () => {
    usersData = await getUsersData();
  });

  it('Should register a new user successfully', () => {
    const newUser = usersData.newUser;
    const email = `john.doe+${Date.now()}@example.com`;
    RegistrationPage.navigate();
    AssertRegistrationPage.checkRegistrationURL();
    RegistrationPage.register(
      newUser.firstname,
      newUser.lastname,
      email,
      newUser.password
    );
    AssertRegistrationPage.checkSuccessfulRegistration(
      newUser.firstname,
      newUser.lastname
    );
  });

  it('Should show an error if email already exists', () => {
    const existingUser = usersData.existingUser;
    RegistrationPage.navigate();
    AssertRegistrationPage.checkRegistrationURL();
    RegistrationPage.register(
      existingUser.firstname,
      existingUser.lastname,
      existingUser.email,
      existingUser.password
    );
    AssertRegistrationPage.checkErrorMessage(
      'There is already an account with this email address.'
    );
  });

  it('Should show validation errors for empty required fields', () => {
    RegistrationPage.navigate();
    AssertRegistrationPage.checkRegistrationURL();
    RegistrationPage.clickCreateAccount();
    AssertRegistrationPage.checkValidationMessageCount(
      'This is a required field.',
      5
    );
  });

  it('Should show validation error for invalid email format', () => {
    RegistrationPage.navigate();
    AssertRegistrationPage.checkRegistrationURL();
    RegistrationPage.register(
      'Test',
      'User',
      'invalid-email-format',
      'ValidPass123'
    );
    AssertRegistrationPage.checkValidationMessage(
      'Please enter a valid email address (Ex: johndoe@domain.com).'
    );
  });

  it('Should show validation error if passwords do not match', () => {
    RegistrationPage.navigate();
    AssertRegistrationPage.checkRegistrationURL();
    cy.get('#firstname').type('Tom');
    cy.get('#lastname').type('Hanks');
    cy.get('#email_address').type('tom.hanks+test@example.com');
    cy.get('#password').type('ValidPass123');
    cy.get('#password-confirmation').type('DifferentPass456');
    cy.get('.action.submit.primary').click();
    AssertRegistrationPage.checkValidationMessage(
      'Please enter the same value again.'
    );
  });
});
