import { createSlice } from "@reduxjs/toolkit";

const initialCart ={showCart : false , notification : null}

const showCart = createSlice({
    name:'showCart',
    initialState : initialCart ,
    reducers :{
        toggle(state){
            state.showCart = !state.showCart
        },
        notification(state,action){
            state.notification={status : action.payload.status , title : action.payload.title , message : action.payload.message}
        }
    }
})

export const showCartAction = showCart.actions

export default showCart.reducer