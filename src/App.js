import "./App.css";
import Summary from "./components/UI/Summary";

function App() {
  return (
    <div className="app">
      <navbar className="nav">
        ReactMeals
        <button className="cart-btn">
          <i class="fas fa-shopping-cart" />
          Your Cart :<span className="cart-amt"> 0 </span>
        </button>
      </navbar>
      <img
        src="https://react-meals.netlify.app/meals.96abddfc.jpg"
        alt="food"
      ></img>
      <Summary />
    </div>
  );
}

export default App;
