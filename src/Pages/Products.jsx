import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../App/Slices/ProductSlice'
import { useNavigate } from 'react-router-dom'

export default function Products() {
  const navigate=useNavigate()
  const {loading,allProducts,error}=useSelector(state=>state.productReducer)
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(getAllProducts())},[])
  return (
    <div>
      <h1 className='text-center text-6xl font-bold'>Products</h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 m-2'>
          {
        allProducts?.map(item=>(
          <div className=''>
            <section className=' border-2 rounded-xl bg-violet-300/50 p-2'>
              <div className='flex justify-center items-center rounded-xl bg-white'>
                <img src={item.thumbnail} alt="" />
              </div>
              <div className='p-2 rounded-xl mt-2 '>
                <h1 className='text-lg font-bold'>{item.title}</h1>
                <h1 className=''>{item.brand}</h1>
                <h1 className=''>$ {item.price}</h1>
                <button className='bg-cyan-600 w-20 font-bold text-xl h-10 px-2 mt-2 rounded-sm' onClick={()=>navigate(`/view/${item.id}`)}>view</button>
              </div>
            </section>
          </div>
        )).reverse()
      }
        </div>
    </div>
  )
}
