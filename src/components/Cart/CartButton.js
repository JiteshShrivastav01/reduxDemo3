import classes from './CartButton.module.css';
import { showCartAction } from '../../store/showCart';
import { useDispatch, useSelector } from 'react-redux';



const CartButton = (props) => {
  const dispatch=useDispatch()
  const TotalQuantity = useSelector(state => state.cartData.totalQuantity)

  const cartShowHandler = () =>{
    dispatch(showCartAction.toggle())
  }

  return (
    <button className={classes.button} onClick={cartShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{TotalQuantity}</span>
    </button>
  );
};

export default CartButton;
