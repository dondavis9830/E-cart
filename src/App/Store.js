import { configureStore } from "@reduxjs/toolkit";
import productSlice from './Slices/ProductSlice.js'
import wishlistSlice from './Slices/WishListSlice.js'
import cartSlice from './Slices/CartSlice.js'
const store = configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice,
    }

})

export default store