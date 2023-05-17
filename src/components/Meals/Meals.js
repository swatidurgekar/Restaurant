import "./Meals.css";
import Button from "../Button/Button";
import CartContext from "../../store/cart-context";
import { useContext, useState } from "react";

const Meals = () => {
  const [quantity, setQuantity] = useState(1);
  const meals = [
    {
      title: "One-Pot Vegetarian Chili Mac",
      description: "Favorite bean and pasta",
      price: 129,
      quantity: 0,
    },
    {
      title: "Dal Fry ",
      description: "Dish prepared by cooking black lentil ",
      price: 159,
      quantity: 0,
    },
    {
      title: "Aloo Paratha",
      description: "Paratha With Raita",
      price: 55,
      quantity: 0,
    },
    {
      title: "Mattar Paneer",
      description: "Aromatic rice with fresh veggies",
      price: 149,
      quantity: 0,
    },
  ];
  return (
    <div className="meals">
      {meals.map((item) => {
        const quantityFunction = () => {
          const value = document.getElementById(item.title).value;
          setQuantity(value);
        };
        return (
          <div key={item.title}>
            <div className="meal-item">
              <h4>{item.title}</h4>
              <p className="meal-item-desc">{item.description}</p>
              <p className="meal-item-price">{item.price}</p>
            </div>
            <div className="meal-item-amount">
              <form>
                <label htmlFor="amount">Amount </label>
                <input
                  onChange={quantityFunction}
                  className="form-input"
                  id={item.title}
                  type="number"
                  defaultValue={quantity}
                ></input>
                <br />
                <Button
                  quantity={quantity}
                  key={item.price}
                  item={item}
                  className="add-btn"
                  id={item.title}
                >
                  +Add
                </Button>
              </form>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Meals;
