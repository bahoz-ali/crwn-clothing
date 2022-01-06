import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../button/c.button";
import FormInput from "../form-input/c.form_input";
import "./s.signin.scss";

//* this one is used inside "SigninSignUp component"
const Signin = () => {
  const [account, setAccount] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAccount((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInWithEmailAndPassword(
        getAuth(),
        account.email,
        account.password
      );

      navigate("/");
      console.log("successfully login:", user);
    } catch ({ code, message }) {
      console.log("something failed:", code, message);
    }
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
        <div className="buttons">
          <CustomButton type="submit">SING-IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} google={true}>
            SIGN-IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default Signin;
