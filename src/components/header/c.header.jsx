import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./s.header.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {!currentUser && (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      {currentUser && (
        <Link onClick={() => auth.signOut()} className="option" to="/signin">
          LOGOUT
        </Link>
      )}
      <Link className="option" to="/signin">
        😁
      </Link>
    </div>
  </div>
);

export default Header;
