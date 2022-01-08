import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Link } from "react-router-dom";
import "./s.header.scss";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";

const Header = function () {
  const currentUser = useSelector((state) => state.user.value);

  return (
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
          <Link className="option" to="signin">
            SIGNIN
          </Link>
        )}
        {currentUser && (
          <Link
            onClick={() => {
              console.log("currentUser:", currentUser);
              auth.signOut();
            }}
            className="option"
            to="/signin"
          >
            LOGOUT
          </Link>
        )}
        <Link className="option" to="/signin">
          😁
        </Link>
      </div>
    </div>
  );
};

export default Header;
