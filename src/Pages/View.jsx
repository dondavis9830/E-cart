import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../App/Slices/WishListSlice';
import { addToCart } from '../App/Slices/CartSlice';




export default function View() {
  const {id}=useParams()
  console.log(id);
  const [product,setProduct]=useState({})
  console.log(product);
  
  // api fetching
  const {allProducts}=useSelector(state=>state.productReducer)
  const wishList=useSelector(state=>state.wishlistReducer)
  const cartList=useSelector(state=>state.cartReducer)
  console.log(Array.isArray(wishList));
  console.log(Array.isArray(cartList))
  console.log(wishList);
  console.log(cartList);
  
  
  
  const dispatch=useDispatch()
  const handleWishList=()=>{
   const existingProduct=wishList.find(item=>item.id==product.id)
   if(existingProduct){
    alert('product allready existing')
   }else{
    dispatch(addToWishlist(product))
    alert('added to wishlist')
   }
  }
  const handleCart=()=>{
    const existingProduct=cartList.find(item=>item.id==product.id)
    
    if(existingProduct){
      alert('product already existing')
    }else{
      dispatch(addToCart(product))
      alert('added to cartList')
    }
  }

  useEffect(()=>{
    setProduct(allProducts.find(item=>item.id==id))
  },[])

  




  return (
    <div>
      <section className='p-30'>
        {
        <div className='flex'>
          <div className='flex flex-col me-2 '>
            <img className='border-2 w-48' src={product.thumbnail} alt="" />
          </div>
            <div className='min-w-96 max-h-96 border-2  bg-amber-100'>
              <img className='h-96' src={product.thumbnail} alt="" />
            </div>
            <div className='px-10 min-h-screen'>
              <h1 className='mb-2 capitalize bg-amber-100 font-bold rounded-lg px-2 py-1 w-20 flex justify-center items-center'>{product.category}</h1>
              <h1 className='mb-2 text-4xl font-bold capitalize'>{product.title}</h1>
              <h1 className='mb-2 capitalize'>Brand: <span className='text-fuchsia-800 font-bold'>{product.brand}</span></h1>
              <h1 className='mb-0 text-xl' >Rating : {product.rating}</h1>
              <h1 className='my-4 text-2xl'>$ {product.price} <span className='bg-fuchsia-400 text-fuchsia-950 font-bold px-7 rounded-2xl py-1 '> {product.discountPercentage} %OFF </span></h1>
              <h1 className='mb-2 text-emerald-600 text-xl'>{product.availabilityStatus}</h1>
              <p className='mb-2 text-slate-950'>{product.description}</p>
              <div className='mb-2 flex gap-2 font-semibold'>
                  <button onClick={handleCart} className='bg-purple-500 text-white px-16 py-2 font-bold rounded-xl'>Add to cart</button>
                  <button onClick={handleWishList} className='bg-sky-500 text-white px-16 py-2 font-bold rounded-xl'>Add to wishlist</button>
              </div>
              <div className='gap-4 my-2'>
                <div className='grid grid-cols-2'>
                  <h1 className='bg-slate-100 flex justify-center items-center p-1 m-1'>{product.shippingInformation}</h1>
                  <h1 className='bg-slate-100 flex justify-center items-center p-1 m-1'>{product.returnPolicy}</h1>
                </div>
                <div className='grid grid-cols-2'>
                  <h1 className='bg-slate-100 flex justify-center items-center p-1 m-1'>{product.warrantyInformation}</h1>
                  <h1 className='bg-slate-100 flex justify-center items-center p-1 m-1'>{product.minimumOrderQuantity} min order quantity</h1>
                </div>
              </div>
            </div>

        </div>
        }

      </section>

    </div>
  )
}
