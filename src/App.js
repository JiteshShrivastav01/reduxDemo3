import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification'
import { sendCartData , fetchCartData } from './cartActions';


let isInitial = true

function App() {

  const showCart = useSelector(state => state.showCart.showCart)
  const cart = useSelector(state => state.cartData)
  const dispatch=useDispatch()
  const notification=useSelector(state=>state.showCart.notification)
  

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])
  

  useEffect(()=>{
    if(isInitial){
      isInitial=false
      return
    }
    dispatch(sendCartData(cart))
  },[cart,dispatch])

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
