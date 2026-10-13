
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import PageNotFound from './Pages/PageNotFound'
import Appbar from './Components/Appbar'
import Footer from './Components/Footer'
import View from './Pages/View'

function App() {

  return (
    <>
    <Appbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
