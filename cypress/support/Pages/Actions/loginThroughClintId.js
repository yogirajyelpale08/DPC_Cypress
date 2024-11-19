import LoginThroughClintIdElements from "../Elements/loginThroughClintIdElements";
import { LoginPageData } from "../../../Data/LoginPageData";

class LoginThroughClientId {
  normalizeSpaces(str) {
    return str.replace(/\u00A0/g, " ").trim();
  }

  validateHealthCompilerLogo() {
    cy.get(LoginThroughClintIdElements.HEALTH_COMPILER_LOGO).should("be.visible");
  }

  validateEmptyClientIdEntry() {
    cy.get(LoginThroughClintIdElements.CLIENT_ID_INPUT_FIELD)
      .clear({ force: true })
    cy.get(LoginThroughClintIdElements.NEXT_BUTTON).click();
    cy.get(LoginThroughClintIdElements.EMPTY_MESSAGE_ERROR)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(this.normalizeSpaces(text)).to.eq(
          LoginPageData.EMPTY_CLIENT_ID_MESSAGE
        );
      });
  }

  validateInvalidClientIdEntry() {
    cy.get(LoginThroughClintIdElements.CLIENT_ID_INPUT_FIELD)
      .clear({ force: true })
      .type(LoginPageData.INVALID_CLIENT_ID, { force: true });
    cy.get(LoginThroughClintIdElements.NEXT_BUTTON).click();
    cy.get(LoginThroughClintIdElements.INVALID_MESSAGE_ERROR)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(this.normalizeSpaces(text)).to.eq(
          LoginPageData.INVALID_CLIENT_ID_ERROR
        );
      });
  }

  validateContactAt() {
    cy.get(LoginThroughClintIdElements.CONTACT_EMAIL_LINK)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(this.normalizeSpaces(text)).to.eq(LoginPageData.CONTACT_EMAIL);
      });
  }

  validateBookAMeeting() {
    cy.get(LoginThroughClintIdElements.BOOK_MEETING_BUTTON)
      .invoke("removeAttr", "target")
      .click();
    cy.get(LoginThroughClintIdElements.BOOK_MEETING_PAGE_HEADER)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(this.normalizeSpaces(text)).to.eq(
          LoginPageData.BOOK_MEETING_PAGE_TITLE
        );
      });
  }

  validatePrivacyPolicyLink() {
    cy.get(LoginThroughClintIdElements.PRIVACY_POLICY_LINK)
      .invoke("removeAttr", "target")
      .click();
    cy.get(LoginThroughClintIdElements.PRIVACY_POLICY_PAGE_HEADER)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(
          this.normalizeSpaces(LoginPageData.PRIVACY_POLICY_PAGE_TITLE)
        ).to.eq(LoginPageData.PRIVACY_POLICY_PAGE_TITLE);
      });
  }

  validateTermsOfServiceLink() {
    cy.get(LoginThroughClintIdElements.TERMS_OF_SERVICE_LINK)
      .invoke("removeAttr", "target")
      .click();
    cy.get(LoginThroughClintIdElements.TERMS_OF_SERVICE_PAGE_HEADER)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(this.normalizeSpaces(text)).to.eq(
          LoginPageData.TERMS_OF_SERVICE_PAGE_TITLE
        );
      });
  }

  validateHelpLink() {
    cy.get(LoginThroughClintIdElements.HELP_LINK)
      .invoke("removeAttr", "target")
      .click();
    cy.get(LoginThroughClintIdElements.HELP_PAGE_HEADER)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(this.normalizeSpaces(text)).to.eq(
          LoginPageData.HELP_SIDEBAR_TITLE
        );
      });
  }

  validateClickOnHcLogo() {
    cy.get(LoginThroughClintIdElements.FOOTER_LOGO_LINK)
      .invoke("removeAttr", "target")
      .click();
    cy.get(LoginThroughClintIdElements.HC_WEB_LOGO).should("be.visible");
  }

  validateValidClientIdEntry() {
    cy.get(LoginThroughClintIdElements.CLIENT_ID_INPUT_FIELD)
      .clear({ force: true })
      .type(LoginPageData.VALID_CLIENT_ID, { force: true });
    cy.get(LoginThroughClintIdElements.NEXT_BUTTON).click();
    cy.get(LoginThroughClintIdElements.CLIENT_ID_ON_LOGIN_PAGE)
      .should("be.visible")
      .invoke("text")
      .then((text) => {
        expect(this.normalizeSpaces(text)).to.eq(LoginPageData.VALID_CLIENT_ID);
      });
  }
}

const LoginThroughClintId = new LoginThroughClientId();
export default LoginThroughClintId;
