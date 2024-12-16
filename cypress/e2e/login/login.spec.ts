import AssertLoginPage from '../../support/assertPages/AssertLoginPage';
import LoginPage from '../../support/pages/LoginPage';
import { getUsersData } from '../../testData/usersData';

describe('User login', () => {
  let usersData: any;
  before(async () => {
    usersData = await getUsersData();
  });
  it('Should  login successfully', () => {
    LoginPage.navigate();
    AssertLoginPage.checkLoginURL();
    LoginPage.login(usersData.user1.email, usersData.user1.password);
    AssertLoginPage.checkLoginSuccessURL();
  });
  it('Should show error message for invalid password', () => {
    LoginPage.navigate();
    AssertLoginPage.checkLoginURL();
    LoginPage.login(usersData.user1.email, 'WrongPassword123!');
    AssertLoginPage.checkErrorMessage(
      'The account sign-in was incorrect or your account is disabled temporarily.'
    );
  });
  it('Should show error message for completely invalid credentials', () => {
    LoginPage.navigate();
    AssertLoginPage.checkLoginURL();
    LoginPage.login(
      usersData.invalidUser.email,
      usersData.invalidUser.password
    );
    AssertLoginPage.checkErrorMessage(
      'The account sign-in was incorrect or your account is disabled temporarily.'
    );
  });
  it('Should not allow login with empty fields', () => {
    LoginPage.navigate();
    AssertLoginPage.checkLoginURL();
    LoginPage.clickLogin();
    AssertLoginPage.checkErrorMessage('A login and a password are required.');
  });
});
