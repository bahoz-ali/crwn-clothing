import React, { useState } from "react";
import "./s.sign-up.scss";
import FormInput from "../form-input/c.form_input";
import CustomButton from "../button/c.button";
import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { auth, newUserDoc } from "../../firebase/firebase.utils";

function SignUp({ signInWithGoogle }) {
  const [account, setAccount] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setAccount((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = account;
    if (confirmPassword !== password) return alert("passwords do'nt match.!");

    try {
      const { user } = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      await newUserDoc(user, { displayName });

      //to clean up the form.
      setAccount({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("something failed:", error);
    }
  };

  return (
    <div className="sign-up">
      <h1>I don't have an account.</h1>
      <span>sing in with your email and password.</span>

      <form className="sign-up-form" onSubmit={handleSubmit} action="">
        <FormInput
          name="displayName"
          type="text"
          value={account.displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          name="email"
          type="email"
          value={account.email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={account.password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={account.confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SING-UP</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
