import React from 'react'
import Header from '../components/Header/Header'
import Membership from '../components/Membership/Membership'
import WishlistBody from '../components/Wishlist/WishlistBody'
import WishListHero from '../components/WishList/WishListHero'

function Wishlist() {
  return (
      <div>
          <Header />
          <WishListHero />
          <WishlistBody />
          <Membership/>
    </div>
  )
}

export default Wishlist