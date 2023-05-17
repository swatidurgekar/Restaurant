import "./Button.css";
import CartContext from "../../store/cart-context";
import { useContext, useState } from "react";

const Button = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const cartCtx = useContext(CartContext);
  const [items, setItem] = useState([cartCtx.items]);

  const clickHandler = (e) => {
    e.preventDefault();

    if (cartCtx.items.length > 0) {
      let flag = 0;
      cartCtx.items.map((item) => {
        if (item.title === props.item.title) {
          flag = 1;

          if (flag === 1) {
            let newArray = cartCtx.items.filter((item) => {
              return item.title !== props.item.title;
            });
            const obj = {
              ...props.item,
              quantity: item.quantity + Number(props.quantity),
            };
            newArray.push(obj);
            console.log(newArray);
            cartCtx.updateItem([...newArray]);
            return;
          }
        }
      });

      if (flag === 0) {
        cartCtx.addItem({
          ...props.item,
          quantity: props.item.quantity + Number(props.quantity),
        });
      }
    } else {
      cartCtx.addItem({
        ...props.item,
        quantity: props.item.quantity + Number(props.quantity),
      });
    }
  };
  return (
    <div>
      <button
        id={props.item}
        className={props.className}
        onClick={clickHandler}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
