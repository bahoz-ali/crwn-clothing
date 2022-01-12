import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import CollectionItem from "../../components/collection-item/c.collection_item";
import { selectCollection } from "../../features/selectors/selectCollection";
import "./s.collectionPage.scss";

function CollectionPage() {
  const { collectionId } = useParams();

  const specialCollection = useSelector(selectCollection(collectionId));
  const { title, items } = specialCollection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} id={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default CollectionPage;
