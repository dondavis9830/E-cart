import React from 'react'
import { Link } from 'react-router-dom'


export default function Appbar() {
  return (
    <div>
      <nav className='p-5 flex justify-between bg-mist-800 text-white'>
        <div className='flex justify-center items-center'>
            <h1 className='text-4xl font-bold'>ShopEase</h1>
        </div>
        <div className='flex justify-center items-center gap-2 pe-5'>
            <Link to={'/products'} >
            <div className='flex justify-center items-center gap-2 bg-amber-600/50 p-2 rounded-xl'>
                <h1 className='text-xl font-semibold'>Products</h1>
                {/* <div className='w-5 h-5 rounded-full bg-amber-300'>
                    <h1  id='wishlength'> </h1>
                </div> */}
            </div>
            </Link>
            <Link to={'/wishlist'} >
            <div className='flex justify-center items-center gap-2 bg-amber-600/50 p-2 rounded-xl'>
                <h1 className='text-xl font-semibold'>Wishlist</h1>
                {/* <div className='w-5 h-5 rounded-full bg-amber-300'>
                    <h1  id='wishlength'> </h1>
                </div> */}
            </div>
            </Link>
            <Link to={'/cart'}>
            <div className='flex justify-center items-center gap-2 bg-amber-600/50 p-2 rounded-xl'>
                <h1 className='text-xl font-semibold'>Cart</h1>
                {/* <div className='w-5 h-5 rounded-full bg-amber-300'>
                    <h1  id='cartlength'> </h1>
                </div> */}
            </div>
            </Link>
        </div>
      </nav>
    </div>
  )
}
