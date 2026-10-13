import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        // actions add & remoove
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        deleteitem:(state,action)=>{
          return state.filter(item=>item.id!=action.payload)
        
        }
    }

})
export const {addToWishlist,deleteitem}=wishlistSlice.actions

export default wishlistSlice.reducer
