import React from "react";
import { useState } from "react";
import CustomButton from "../button/c.button";
import FormInput from "../form-input/c.form_input";
import "./s.signin.scss";

//* this one is used inside "SigninSignUp component"
const Signin = () => {
  const [account, setAccount] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAccount((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-in">
      <h1>I'VE ALREADY AN ACCOUNT.</h1>
      <span>sing in with your email and password.</span>

      <form onSubmit={handleSubmit} action="">
        <FormInput
          name="email"
          type="email"
          value={account.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={account.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <CustomButton type="submit">SING-IN</CustomButton>
        <CustomButton type="submit">SIGN-IN WITH GOOGLE</CustomButton>
      </form>
    </div>
  );
};

export default Signin;
