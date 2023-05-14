import React from "react";
import ReactDOM from "react-dom";
import "./Cart.css";

const Backdrop = () => {
  return <div className="backdrop"></div>;
};

const ModalOverlay = () => {
  const cart = [
    {
      title: "One-Pot Vegetarian Chili Mac",
      desc: "Favorite bean and pasta",
      amount: "$129",
    },
  ];
  return (
    <div className="cart">
      {cart.map((item) => {
        return (
          <div className="cart1">
            <p className="cart-item">{item.title}</p>
            <h3 className="cart-amount">Total Amount </h3>
            <div className="cart2">
              <h3>{item.amount}</h3>
              <button className="btn">Close</button>
              <button className="btn">Order</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Cart = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(<ModalOverlay />, document.getElementById("cart"))}
    </React.Fragment>
  );
};

export default Cart;
