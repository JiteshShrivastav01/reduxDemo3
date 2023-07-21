import { showCartAction } from "./store/showCart";
import { cartDataAction } from "./store/cartData";

export const fetchCartData=()=>{
    return async (dispatch)=>{

        const fetchCart=async ()=>{
            const res=await fetch(`https://expensetracker-a6562-default-rtdb.firebaseio.com/reduxDemo3Cart.json`)

            
            if(!res.ok){
                throw new Error('Something went wrong in data fetching')
            }
            const data=await res.json()

            return data
        }

        try{
            const cartData=await fetchCart()
            dispatch(cartDataAction.replaceCart(cartData))
        }
        catch(err){
            dispatch(showCartAction.notification({
                status : 'error',
                title :'Failed ! ' ,
                message : 'Sending data to cart failed.'
            }))
        }
    }
}

export const sendCartData=(cart)=>{
    return async (dispatch) =>{
        dispatch(showCartAction.notification({
            status : 'pending',
            title :'Sending ...' ,
            message : 'Sending the data to cart'
          }))

        const sendRequest=async()=>{
            const res=await fetch(`https://expensetracker-a6562-default-rtdb.firebaseio.com/reduxDemo3Cart.json`,{
                method : 'PUT',
                body : JSON.stringify(cart)
             })
     
             
     
             if(!res.ok){
               throw new Error('Something went wrong in data sending')
             }
             const data = await res.json()
             console.log(data)
        }

        try{
            await sendRequest()
            
            dispatch(showCartAction.notification({
               status : 'success',
               title :'Success ' ,
               message : 'Sent data to cart successfully.'
            }))
        }
        catch(err){
            dispatch(showCartAction.notification({
                status : 'error',
                title :'Failed ! ' ,
                message : 'Sending data to cart failed.'
            }))
        }
    }
}