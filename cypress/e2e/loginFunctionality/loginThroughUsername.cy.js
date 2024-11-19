import { LoginPageData } from "../../Data/LoginPageData";
import LoginThroughClintId from "../../support/Pages/Actions/loginThroughClintId";
import loginThroughUsername from "../../support/Pages/Actions/loginThroughUsername";


beforeEach(() => {
  cy.visit(LoginPageData.PAGE_URL);
  LoginThroughClintId.validateValidClientIdEntry();
});
describe("login tests", () => {
  it("Verify that login is successful with valid creds", () => {
    loginThroughUsername.enterUsername(LoginPageData.VALID_USERNAME);
   loginThroughUsername.enterPassword(LoginPageData.VALID_PASSWORD);
    loginThroughUsername.clickSignInButton()
    loginThroughUsername.validatesucessfulLogin(LoginPageData.DASHBOARD_TITLE)
    
  });
  it("Verify that login is unsuccessful with invalid creds", () => {
    loginThroughUsername.enterUsername(LoginPageData.INVALID_USERNAME);
    loginThroughUsername.enterPassword(LoginPageData.INVALID_PASSWORD);
    loginThroughUsername.clickSignInButton()
    loginThroughUsername.validateErrorMessage(LoginPageData.INVALID_LOGIN_ERROR)
  });

});