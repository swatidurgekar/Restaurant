import "./App.css";
import Meals from "./components/Meals/Meals";
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
      <Meals />
    </div>
  );
}

export default App;
