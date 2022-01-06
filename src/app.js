import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/c.homepage";
import ShopPage from "./pages/shop/c.shop";
import Header from "./components/header/c.header";
import SingInSignUp from "./pages/signin-signup/c.signin-signup";
import { auth } from "./firebase/firebase.utils";
import "./app.css";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let isMounted = true;
    auth.onAuthStateChanged(async (userAuth) => {
      if (isMounted) setCurrentUser(userAuth);
    });

    return () => {
      console.log("Good Bye");
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
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
