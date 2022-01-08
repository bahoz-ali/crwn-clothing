import React from "react";
import CustomButton from "../button/c.button";
import "./s.collection_item.scss";

//* this is part of (collection_preview)
function CollectionItem({ id, imageUrl, price, name, ...rest }) {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted={true}>ADD TO CART</CustomButton>
    </div>
  );
}

export default CollectionItem;
