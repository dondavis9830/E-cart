import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        // actions
        // add to cart
        addToCart:(state,action)=>{
        const existingItem=state.find(item=>item.id==action.payload.id)
        if(existingItem){
            // quantity increment price update
            // existingItem.quantity+=1
            // existingItem.totalPrice=existingItem.price*existingItem.quantity

        }else{
            // 
            state.push({...action.payload,quantity:1,totalPrice:action.payload.price})}
        },
        // remove cart
        // increment cart
        incrementItem:(state,action)=>{
        const existingItem=state.find(item=>item.id==action.payload.id)
        if(existingItem){
            existingItem.quantity+=1
            existingItem.totalPrice=existingItem.price*existingItem.quantity
        }
        },
        decrementItem:(state,action)=>{
        const existingItem=state.find(item=>item.id==action.payload.id)
        if(existingItem){
            if(existingItem.quantity>1){
                existingItem.quantity-=1
                existingItem.totalPrice=existingItem.price*existingItem.quantity
            }

        }
        },
        // empty cart
        emptyCart:(state)=>{
            return []
        }
        
    }
})
export const {addToCart,incrementItem,decrementItem,emptyCart} = cartSlice.actions
export default cartSlice.reducer