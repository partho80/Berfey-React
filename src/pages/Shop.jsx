import React from 'react'
import Header from '../components/Header/Header'
import ShopAll from '../components/Shop/ShopBody'
import ShopHero from '../components/Shop/ShopHero'

function Shop() {
  return (
      <div>
          <Header />
          <ShopHero />
          <ShopAll/>
    </div>
  )
}

export default Shop