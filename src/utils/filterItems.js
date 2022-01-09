import _ from "lodash";

function filterItems(cartItems, newItem) {
  const existItem = _.find(cartItems, (item) => item.id === newItem.id);

  if (existItem) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
}

export default filterItems;
