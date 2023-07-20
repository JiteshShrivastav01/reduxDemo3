import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification'
import { showCartAction } from './store/showCart';



let isInitial = true

function App() {

  const showCart = useSelector(state => state.showCart.showCart)
  const cart = useSelector(state => state.cartData)
  const dispatch=useDispatch()
  const notification=useSelector(state=>state.showCart.notification)
  

  useEffect(()=>{
    const sendingData = async ()=>{
        const res=await fetch(`https://expensetracker-a6562-default-rtdb.firebaseio.com/reduxDemo3Cart.json`,{
           method : 'PUT',
           body : JSON.stringify(cart)
        })

        dispatch(showCartAction.notification({
          status : 'pending',
          title :'Sending ...' ,
          message : 'Sending the data to cart'
        }))

        if(!res.ok){
          throw new Error('Something went wrong in data sending')
        }
        const data = await res.json()
        console.log(data)

        dispatch(showCartAction.notification({
          status : 'success',
          title :'Success ' ,
          message : 'Sent data to cart successfully.'
        }))
    }

    if(isInitial){
      isInitial=false
      return
    }

    sendingData().catch((err)=>{
      dispatch(showCartAction.notification({
        status : 'error',
        title :'Failed ! ' ,
        message : 'Sending data to cart failed.'
      }))
    })
    


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
