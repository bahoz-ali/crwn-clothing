// eslint-disable-next-line
import React from "react";
import Homepage from "./pages/homepage/c.homepage";
import ShopPage from "./pages/shop/c.shop";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/c.header";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="shop/jackets" element={<Homepage />} />
        <Route path="shop/sneakers" element={<Homepage />} />
        <Route path="shop/womens" element={<Homepage />} />
        <Route path="shop/mens" element={<Homepage />} />
      </Routes>
    </div>
  );
}
