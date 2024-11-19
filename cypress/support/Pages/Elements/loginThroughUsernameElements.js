class loginThroughUsernameElements {
  USERNAME_INPUT_FIELD = "#username";
  PASSWORD_INPUT_FIELD = "#password";
  SIGN_IN_BUTTON = ".signinBtn";
  DASHBOARDS = ".navbarTab.activeNavbarTab";
  INVALID_USERNAME_PASSWORD_MESSAGE=":nth-child(3) > .error"    
}
const LoginThroughUsernameElements = new loginThroughUsernameElements();
export default LoginThroughUsernameElements;
