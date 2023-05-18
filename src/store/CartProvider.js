import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItem] = useState([]);
  const addItemToCartHandler = (newItem) => {
    setItem([...items, newItem]);
  };

  const updateItemToCartHandler = (items) => {
    setItem(items);
  };

  const removeItemFromCartHandler = (id) => {
    const array = items.filter((item) => {
      return item.title !== id.title;
    });
    array.push({ ...id, quantity: id.quantity - 1 });
    setItem(array);
  };
  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    updateItem: updateItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    msg: "hi",
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
