import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// async action shoudbe dispatched by product componet

export const getAllProducts=createAsyncThunk('product/getAllProducts',async()=>{
    const res = await axios.get('https://dummyjson.com/products')
    console.log(res);
    return res.data.products
    
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        loading:true,
        allProducts:[],
        error:''
    },
    reducers:{
        // actions search,

    },
    extraReducers:(builder)=>{
        // actions promice impementation,
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.allProducts=action.payload
            state.loading=false
            state.error=''
        })
        builder.addCase(getAllProducts.pending,(state,action)=>{
            state.allProducts=[]
            state.loading=false
            state.error=''
        })
        builder.addCase(getAllProducts.rejected,(state,action)=>{
            state.allProducts=[]
            state.loading=false
            state.error='API call failed'
        })

    }
  
})

export default productSlice.reducer