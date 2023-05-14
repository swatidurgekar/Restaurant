import React from "react";
import ReactDOM from "react-dom";
import "./Cart.css";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
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
              <button onClick={props.onClose} className="btn">
                Close
              </button>
              <button className="btn">Order</button>
            </div>
          </div>
        );
      })}
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
