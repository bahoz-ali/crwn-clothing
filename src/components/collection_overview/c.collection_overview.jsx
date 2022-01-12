import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../collection_preview/c.collection_preview";

function CollectionOverview() {
  const collections = useSelector((state) => state.shop.collections);
  
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default CollectionOverview;
