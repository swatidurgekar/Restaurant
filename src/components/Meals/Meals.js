import "./Meals.css";

const Meals = () => {
  const meals = [
    {
      title: "One-Pot Vegetarian Chili Mac",
      description: "Favorite bean and pasta",
      price: "$129",
    },
    {
      title: "Dal Fry ",
      description: "Dish prepared by cooking black lentil ",
      price: "$159",
    },
    {
      title: "Aloo Paratha",
      description: "Paratha With Raita",
      price: "$55",
    },
    {
      title: "Mattar Paneer",
      description: "Aromatic rice with fresh veggies",
      price: "$149",
    },
  ];
  return (
    <div className="meals">
      {meals.map((item) => {
        return (
          <div>
            <div className="meal-item">
              <h4>{item.title}</h4>
              <p className="meal-item-desc">{item.description}</p>
              <p className="meal-item-price">{item.price}</p>
            </div>
            <div className="meal-item-amount">
              <form>
                <label htmlFor="amount">Amount </label>
                <input
                  value={1}
                  className="form-input"
                  id="amount"
                  type="number"
                ></input>
                <br />
                <button className="add-btn">+Add</button>
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
