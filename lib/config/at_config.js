import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';


var preSignup = function(){
};

var acctSubmit = function(error, state){
  if (!error) {

    if ( state === "changePwd" ) {
        window.history.back();
    }

    if ( state === "resetPwd" ) {
        window.history.back();
    }

  } else {
    console.log("Please try again.");
  }
}

AccountsTemplates.configure({
    lowercaseUsername: false,
    showPlaceholders: false,
    enablePasswordChange: true,
    showAddRemoveServices: false,
    hideSignUpLink: true,
    hideSignInLink: true,
    showForgotPasswordLink: false,
    showLabels: true,
    preSignUpHook: preSignup,
    onSubmitHook: acctSubmit,
    texts: {
      signInLink_pre: "Already have an account?",
      signInLink_link: "Sign In",
      pwdLink_link: "Forgot Password",
      button: {
        forgotPwd: "Reset Password",
        resetPwd: "Change Password",
        changePwd: "Change Password"
      },
      errors: {
        loginForbidden: "Invalid Email or Password.",
        pwdMismatch: "Passwords do not match."
      }
    }
});
AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "Email",
      negativeValidation: true,
      negativeFeedback: false,
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid Email',
    },

    {
      _id: 'Name',
      type: 'text',
      placeholder: {
        signUp: "Full Name"
      },
      required: true,
      negativeValidation: true,
      negativeFeedback: false
    },

    {
      _id: 'password',
      type: 'password',
      displayName: "Password",
      negativeValidation: true,
      negativeFeedback: false,
      placeholder: {
        signUp: "At least six characters"
      },
      required: true,
      minLength: 6,
    },
    {
      _id: 'password_again',
      type: 'password',
      displayName: "Confirm Password",
      negativeValidation: true,
      negativeFeedback: false,
      placeholder: {
        signUp: "At least six characters"
      },
      required: true,
      minLength: 6,
    },
]);
