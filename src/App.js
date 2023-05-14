import "./App.css";
import Meals from "./components/Meals/Meals";
import Summary from "./components/UI/Summary";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
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
      <navbar className="nav">
        ReactMeals
        <button className="cart-btn" onClick={clickHandler}>
          <i class="fas fa-shopping-cart" />
          Your Cart :<span className="cart-amt"> 0 </span>
        </button>
      </navbar>
      <img
        src="https://react-meals.netlify.app/meals.96abddfc.jpg"
        alt="food"
      ></img>
      <Summary />
      <Meals />
    </div>
  );
}

export default App;
