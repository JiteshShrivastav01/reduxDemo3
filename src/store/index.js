import { configureStore } from "@reduxjs/toolkit";
import showCartReducer from './showCart'
import cartDataReducer from "./cartData";

const store=configureStore({
    reducer : { showCart : showCartReducer , cartData : cartDataReducer}
})

export default store