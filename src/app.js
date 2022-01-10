import "./app.css";
import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./pages/homepage/c.homepage";
import ShopPage from "./pages/shop/c.shop";
import Header from "./components/header/c.header";
import SingInSignUp from "./pages/signin-signup/c.signin-signup";
import { auth } from "./firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./features/userSlice";
import CheckoutPage from "./pages/checkouPage/c.checkoutPage";

export default function App() {
  const dispatch = useDispatch();

  const SignInWrapper = () => {
    const currentUser = useSelector((state) => state.user.value);
    return currentUser ? <Navigate to="/" replace /> : <SingInSignUp />;
  };

  useEffect(() => {
    let isMounted = true;
    auth.onAuthStateChanged(async (userAuth) => {
      if (isMounted) dispatch(setCurrentUser(userAuth));
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
        <Route path="/signin" element={<SignInWrapper />} />
        <Route path="shop/sneakers" element={<Homepage />} />
        <Route path="shop/womens" element={<Homepage />} />
        <Route path="shop/mens" element={<Homepage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}
