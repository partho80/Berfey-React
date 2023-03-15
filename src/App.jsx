import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home'
import Footer from './components/Footer/Footer'
import Home_2 from './pages/Home_2'
import About from './pages/About'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Error from './pages/Error'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import ProductDetails from './pages/ProductDetails'

function App() {

  return(
    <div>
      

    <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/Home_2' element={<Home_2 />} />
          <Route exact path='/AboutUs' element={<About />} />
          <Route exact path='/Blog' element={<Blog />} />
          <Route exact path='/BlogDetails' element={<BlogDetails />} />
          <Route exact path='/Shop' element={<Shop />} />
          <Route exact path='/Contact' element={<Contact />} />
          <Route exact path='/Error' element={<Error />} />
          <Route exact path='/Cart' element={<Cart />} />
          <Route exact path='/Wishlist' element={<Wishlist />} />
          <Route exact path='/ProductDetails' element={<ProductDetails />} />
       </Routes>
        <Footer />
   </Router>
    </div>
  )
  
}

export default App
