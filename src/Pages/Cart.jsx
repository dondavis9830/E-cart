import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteitem } from '../App/Slices/WishListSlice';
import { decrementItem, emptyCart, incrementItem } from '../App/Slices/CartSlice';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const cartList=useSelector(state=>state.cartReducer)
  console.log(cartList);
  const dispatch=useDispatch()
  const checkout=()=>{
    alert('successfully ordered')
  }
  const navigate=useNavigate()
  
  
  return (
    <div className=''>
      <div className=''>
{
  cartList.length > 0 ? (
    <div className="grid grid-cols-1 gap-5 p-4">
      {cartList.map(item => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row items-center gap-5 p-5 border rounded-xl shadow-md bg-white"
        >
          {/* Product Image */}
          <img
            className="w-32 h-32 object-contain rounded-lg"
            src={item.thumbnail}
            alt={item.title}
          />

          {/* Product Details */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h2>

            <p className="text-gray-500 text-sm">
              Product ID: {item.id}
            </p>

            <p className="text-gray-700 mt-2">
              Price: ${item.price}
            </p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              onClick={() => dispatch(decrementItem(item))}
              className="bg-slate-200 hover:bg-slate-300 px-4 py-2"
            >
              -
            </button>

            <span className="px-4 py-2 font-semibold">
              {item.quantity}
            </span>

            <button
              onClick={() => dispatch(incrementItem(item))}
              className="bg-slate-200 hover:bg-slate-300 px-4 py-2"
            >
              +
            </button>
          </div>

          {/* Total Price */}
          <div className="text-center">
            <p className="text-sm text-gray-500">Total Price</p>
            <h3 className="text-xl font-bold text-green-700">
              ${(item.quantity * item.price).toFixed(2)}
            </h3>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => dispatch(deleteitem(item.id))}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Remove
            </button>

            <button
              onClick={checkout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              Checkout
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center p-10">
      <h2 className="text-xl font-semibold text-gray-600">
        Your cart is empty
      </h2>
    </div>
  )
}


      </div>
      <div>
        <button onClick={()=>dispatch(emptyCart())}>empty cart</button>
        <button onClick={()=>navigate('/products')}>shop continue</button>
      </div>
       
  
    </div>
  )
}
