import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteitem } from '../App/Slices/WishListSlice';



export default function Wishlist() {
  const wishList=useSelector(state=>state.wishlistReducer)
  console.log(wishList);
  const dispatch=useDispatch()

  
  return (
    <div clas>
        <div className='m-10 '>
          {
        wishList.length>0?wishList.map(item=>(
          <div className='grid grid-cols-3 max-h-96 my-10 rounded-xl p-2.5 shadow-xl shadow-stone-300 '>
            <div className='  min-w-96 max-h-90 flex justify-center items-center bg-white rounded-xl border '>
              <img className='h-96' src={item.thumbnail} alt="" />
              {/* <div className='flex justify-center items-center gap-7'>
              </div> */}
            </div>
            <div className='col-span-2 px-10 min-h-screen overflow-y-hidden'>
              <h1 className='mb-2 capitalize bg-amber-200 rounded-lg px-2 py-1 w-20 flex justify-center items-center'>{item.category}</h1>
              <h1 className='mb-2 text-4xl font-bold capitalize'>{item.title}</h1>
              <h1 className='mb-2 text-cyan-600 capitalize'>Brand: <span className='text-fuchsia-800 font-bold'>{item.brand}</span></h1>
              <h1 className='mb-0 text-2xl' >Rating:{item.rating} </h1>
              <h1 className='my-4 text-2xl'>$ {item.price} <span className='bg-fuchsia-400 text-fuchsia-950 font-bold px-7 rounded-2xl py-1 '> {item.discountPercentage} %OFF </span></h1>
              <h1 className='mb-2 text-emerald-600 text-xl'>{item.availabilityStatus}</h1>
              <div className='mb-2 flex gap-2 font-semibold'>
              
                <button  className='bg-purple-500 text-white px-20 py-2 font-bold rounded-xl'>Add to cart</button>
                <button onClick={()=>dispatch(deleteitem(item?.id))} className='bg-red-900 text-white px-2 py-1 rounded-lg font-bold'>remove</button>
              </div>

            </div>

        </div>
        ))
        :<div className='flex justify-center items-center'>
          <img className='w-200' src="https://static.vecteezy.com/system/resources/previews/016/462/240/large_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg" alt="" />
        </div>
      }
        </div>
    </div>
  )
}
