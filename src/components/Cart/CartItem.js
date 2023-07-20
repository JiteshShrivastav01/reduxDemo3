import classes from './CartItem.module.css';
import { cartDataAction } from '../../store/cartData';
import { useDispatch } from 'react-redux';


const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch=useDispatch()

  const addToCart=()=>{
    dispatch(cartDataAction.addToCart({ItemName:title , ItemPrice : price}))
  }

  const removeFromCart=()=>{
    dispatch(cartDataAction.removeFromCart({ItemName:title}))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCart}>-</button>
          <button onClick={addToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
