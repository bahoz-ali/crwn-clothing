import React from "react";
import { Route, Routes } from "react-router";
import CollectionOverview from "../../components/collection_overview/c.collection_overview.jsx";
import CollectionPage from "../collectioinPage/c.collectionPage.jsx";

export default function ShopPage() {
  return (
    <div className="shop-page">
      <Routes>
        <Route path="/" element={<CollectionOverview />} />
        <Route path="/:collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
}
