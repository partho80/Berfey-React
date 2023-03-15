import React from 'react'
import Header from '../components/Header/Header'
import ProductDetailsBody from '../components/ProductDetails/ProductDetailsBody'
import ProductDetailsHero from '../components/ProductDetails/ProductDetailsHero'

function ProductDetails() {
  return (
      <div>
          <Header />
          <ProductDetailsHero />
          <ProductDetailsBody/>
    </div>
  )
}

export default ProductDetails