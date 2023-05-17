import React from "react";

const CartContext = React.createContext({
  items: [],
  addItem: (item) => {},
  updateItem: (items) => {},
  removeItem: (id) => {},
});

export default CartContext;
