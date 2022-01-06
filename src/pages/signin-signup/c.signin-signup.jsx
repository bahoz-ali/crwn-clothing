import React from "react";
import Signin from "../../components/signin/c.signin";
import SignUp from "../../components/sign_up/c.sign_up";
import "./s.signin-signup.scss";

const SingInSignUp = () => {
  return (
    <div className="signIn-signUp">
      <Signin />
      <div className="vertical-line"></div>
      <SignUp />
    </div>
  );
};

export default SingInSignUp;
