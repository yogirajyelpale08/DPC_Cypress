// import { LoginPageData } from "../../../Data/LoginPageData";
// import loginThroughUsernameElements from "../Elements/loginThroughUsernameElements";

// class LoginThroughUsername {

//     enterUsername(username) {
//       return cy.get(loginThroughUsernameElements.USERNAME_INPUT_FIELD)
//       .clear({ force: true })
//       .type(username,{ force: true });
//     }

//     enterPassword(password){
//         return cy.get(loginThroughUsernameElements.PASSWORD_INPUT_FIELD)
//         .clear({ force: true })
//         .type(password,{ force: true })
//     }

//     clickSignInButton(){
//         return cy.get(loginThroughUsernameElements.SIGN_IN_BUTTON).click()
//     }
//     errorValidaction(){
//      return cy.get(loginThroughUsernameElements.INVALID_USERNAME_PASSWORD_MASSAGE)
//      // .should("be.visible")
//       .invoke("text")
//       .then((text) => {
//         expect(this.normalizeSpaces(text)).to.eq(LoginPageData.DASHBOARD_TITLE);
//       });

//     }
// }

// const loginThroughUsername = new LoginThroughUsername();

// export  default  loginThroughUsername;

import { LoginPageData } from "../../../Data/LoginPageData";
import loginThroughUsernameElements from "../Elements/loginThroughUsernameElements";

class LoginThroughUsername {
  enterUsername(username) {
    return cy
      .get(loginThroughUsernameElements.USERNAME_INPUT_FIELD)
      .clear({ force: true })
      .type(username, { force: true });
  }

  enterPassword(password) {
    return cy
      .get(loginThroughUsernameElements.PASSWORD_INPUT_FIELD)
      .clear({ force: true })
      .type(password, { force: true });
  }

  clickSignInButton() {
    return cy.get(loginThroughUsernameElements.SIGN_IN_BUTTON).click();
     cy.contains("Dashboard").should("be.visible");
  }
  validatesucessfulLogin() {
    cy.get(loginThroughUsernameElements.DASHBOARDS)
      .should("be.visible");
      
  }

  validateErrorMessage() {
  cy.get(loginThroughUsernameElements.INVALID_USERNAME_PASSWORD_MESSAGE)
      .should("be.visible");
  }
}

const loginThroughUsername = new LoginThroughUsername();
export default loginThroughUsername;
