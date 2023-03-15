import React from 'react'
import CartBody from '../components/Cart/CartBody'
import CartHero from '../components/Cart/CartHero'
import Header from '../components/Header/Header'

function Cart() {
  return (
      <div>
          <Header />
          <CartHero />
          <CartBody/>
    </div>
  )
}

export default Cart