import "./App.css";
import Header from "./components/Layout/Header";
import { useContext } from "react";
import CartContext from "./store/cart-context";
import CartProvider from "./store/CartProvider";

function App() {
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + item.quantity;
  });
  return (
    <CartProvider>
      <Header />
    </CartProvider>
  );
}

export default App;
