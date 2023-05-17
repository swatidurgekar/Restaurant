import React from "react";
import { useState } from "react";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Cart from "../Cart/Cart";
import Summary from "../UI/Summary";
import Meals from "../Meals/Meals";

const Header = () => {
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });
  const [cart, setCart] = useState(false);

  const clickHandler = () => {
    setCart(true);
  };

  const cartCloseHandler = () => {
    setCart(false);
  };

  return (
    <div className="app">
      {cart && <Cart onClose={cartCloseHandler} />}
      <nav className="nav">
        ReactMeals
        <button className="cart-btn" onClick={clickHandler}>
          <i className="fas fa-shopping-cart" />
          Your Cart :<span className="cart-amt">{quantity}</span>
        </button>
      </nav>
      <img
        src="https://react-meals.netlify.app/meals.96abddfc.jpg"
        alt="food"
      ></img>
      <Summary />
      <Meals />
    </div>
  );
};

export default Header;
