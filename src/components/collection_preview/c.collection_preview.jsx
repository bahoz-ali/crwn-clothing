import React from "react";
import CollectionItem from "../collection-item/c.collection_item";
import "./s.collection_preview.scss";

//* collection_preview is part of (shop_page)
export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()} </h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...rest }) => (
            <CollectionItem key={id} {...rest} />
          ))}
      </div>
    </div>
  );
}
