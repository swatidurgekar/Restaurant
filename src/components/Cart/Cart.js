import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};
let flag = 0;
const ModalOverlay = (props) => {
  let total = 0;
  const cartCtx = useContext(CartContext);
  cartCtx.items.forEach((item) => {
    total += Number(item.price) * Number(item.quantity);
  });

  const removeItem = (item) => {
    cartCtx.removeItem(item);
  };

  return (
    <div className="cart">
      {cartCtx.items.length > 0 &&
        cartCtx.items.map((item) => {
          return (
            <div key={item.title} className="cart1">
              <h4 className="cart-item">{item.title}</h4>
              <div className="cart-quantity">x {item.quantity}</div>
              <p className="cart-price">${item.price}</p>
              <button onClick={() => removeItem(item)} className="item-btn">
                -
              </button>
              <button className="item-btn">+</button>
              <hr />
            </div>
          );
        })}
      <h3 className="cart-amount">Total Amount:${total}</h3>
      <button onClick={props.onClose} className="cart-button">
        Close
      </button>
      <button className="cart-button">Order</button>
    </div>
  );
};
const Cart = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose} />,
        document.getElementById("cart")
      )}
    </React.Fragment>
  );
};

export default Cart;
