import { createSlice } from "@reduxjs/toolkit";

const initialCart ={showCart : false}

const showCart = createSlice({
    name:'showCart',
    initialState : initialCart ,
    reducers :{
        toggle(state){
            state.showCart = !state.showCart
        }
    }
})

export const showCartAction = showCart.actions

export default showCart.reducer