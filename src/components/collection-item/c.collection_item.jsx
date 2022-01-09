import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart-ItemsSlice";
import CustomButton from "../button/c.button";
import "./s.collection_item.scss";

//* this is part of (collection_preview)
function CollectionItem({ id, imageUrl, price, name, ...rest }) {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const item = { id, imageUrl, price, name, ...rest };
    dispatch(addItem(item));
  };

  return (
    <div className="collection-item">
      <p></p>
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={handleAddItem} inverted={true}>
        ADD TO CART
      </CustomButton>
    </div>
  );
}

export default CollectionItem;
