import { LoginPageData } from "../../Data/LoginPageData";
import LoginThroughClintId from "../../support/Pages/Actions/loginThroughClintId";

/// <reference types="cypress" />

describe("Login through Client ID - Test Cases", () => {
  beforeEach(() => {
    cy.visit(LoginPageData.PAGE_URL);
  });

  context("Page Navigation and Links Validation", () => {
    it("should display the Health Compiler logo", () => {
      LoginThroughClintId.validateHealthCompilerLogo();
    });

    it("should navigate to 'Contact Us' when client ID is missing", () => {
      LoginThroughClintId.validateContactAt();
    });

    it("should navigate to 'Book a Meeting' page", () => {
      LoginThroughClintId.validateBookAMeeting();
    });

    it("should open the Privacy Policy link", () => {
      LoginThroughClintId.validatePrivacyPolicyLink();
    });

    it("should open the Terms of Service link", () => {
      LoginThroughClintId.validateTermsOfServiceLink();
    });

    it("should open the Help link", () => {
      LoginThroughClintId.validateHelpLink();
    });

    it("should navigate correctly when clicking the HC Logo link", () => {
      LoginThroughClintId.validateClickOnHcLogo();
    });
  });

  context("Client ID Validation", () => {
    it("should show an error for empty client ID entry", () => {
      LoginThroughClintId.validateEmptyClientIdEntry();
    });

    it("should show an error for invalid client ID entry", () => {
      LoginThroughClintId.validateInvalidClientIdEntry();
    });

    it("should allow successful login with valid client ID", () => {
      LoginThroughClintId.validateValidClientIdEntry();
    });
  });
});
