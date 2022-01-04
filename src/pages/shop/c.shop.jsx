import SHOP_DATA from "./shop.data.js";
import React, { Component } from "react";
import CollectionPreview from "../../components/collection_preview/c.collection_preview.jsx";

export default class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}
