import classes from './CartButton.module.css';
import { showCartAction } from '../../store/showCart';
import { useDispatch } from 'react-redux';


const CartButton = (props) => {
  const dispatch=useDispatch()

  const cartShowHandler = () =>{
    dispatch(showCartAction.toggle())
  }

  return (
    <button className={classes.button} onClick={cartShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
