import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/c.homepage";
import ShopPage from "./pages/shop/c.shop";
import Header from "./components/header/c.header";
import SingInSignUp from "./pages/signin-signup/c.signin-signup";
import { auth } from "./firebase/firebase.utils";
import "./app.css";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./features/userSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    auth.onAuthStateChanged(async (userAuth) => {
      if (isMounted)  dispatch(setCurrentUser(userAuth));
    });

    return () => {
      console.log("Good Bye");
      isMounted = false;
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SingInSignUp />} />
        <Route path="shop/sneakers" element={<Homepage />} />
        <Route path="shop/womens" element={<Homepage />} />
        <Route path="shop/mens" element={<Homepage />} />
      </Routes>
    </div>
  );
}
