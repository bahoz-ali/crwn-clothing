import { createSelector } from "reselect";

export const selectCollection = (collectionUriParam) => {
  const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5,
  };

  return createSelector(
    (state) => state.shop.collections,
    (collections) =>
      collections.find(
        (collection) => collection.id === COLLECTION_ID_MAP[collectionUriParam]
      )
  );
};
