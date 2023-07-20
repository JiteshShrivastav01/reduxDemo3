import { createSlice } from "@reduxjs/toolkit";

const initialCartData = {
    items : [],
    totalQuantity : 0 ,
}

const cartData = createSlice({
    name : 'cartData',
    initialState : initialCartData ,
    reducers : {
        addToCart(state , action){
           state.totalQuantity++
           const newItem = action.payload
           const ExistingItem = state.items.find(item => item.ItemName === newItem.ItemName)
           const ExistingItemIndex = state.items.findIndex(item => item.ItemName === newItem.ItemName)
           if(!ExistingItem){
             state.items.push({
                ItemName : newItem.ItemName,
                ItemPrice : newItem.ItemPrice,
                ItemQuantity : 1 , 
                ItemTotalPrice : newItem.ItemPrice
             })
           }
           else{
              state.items[ExistingItemIndex].ItemQuantity = state.items[ExistingItemIndex].ItemQuantity + 1 ;
              
              state.items[ExistingItemIndex].ItemTotalPrice = state.items[ExistingItemIndex].ItemQuantity * state.items[ExistingItemIndex].ItemPrice
           }
        },

        removeFromCart(state , action){
            state.totalQuantity--
            const ItemToRemove = action.payload
            const ExistingItem = state.items.find(item => item.ItemName === ItemToRemove.ItemName)
            const ExistingItemIndex = state.items.findIndex(item => item.ItemName === ItemToRemove.ItemName)
            
            if(ExistingItem.ItemQuantity === 1){
                state.items = state.items.filter(item => item.ItemName !== ItemToRemove.ItemName)
            }
            else{
                state.items[ExistingItemIndex].ItemQuantity = state.items[ExistingItemIndex].ItemQuantity - 1 ;

                state.items[ExistingItemIndex].ItemTotalPrice = state.items[ExistingItemIndex].ItemQuantity * state.items[ExistingItemIndex].ItemPrice
            }
        }
    }
})

export const cartDataAction = cartData.actions
export default cartData.reducer