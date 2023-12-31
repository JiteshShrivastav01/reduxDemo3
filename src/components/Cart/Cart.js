import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {
  const cartItems = useSelector(state => state.cartData.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
         cartItems.map(item =>(
          <CartItem
          item={{ title:item.ItemName, quantity: item.ItemQuantity, total: item.ItemTotalPrice, price: item.ItemPrice }}
          />
         ))
        }
      </ul>
    </Card>
  );
};

export default Cart;
