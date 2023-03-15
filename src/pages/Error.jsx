import React from 'react'
import ErrorBody from '../components/Error/ErrorBody'
import ErrorHero from '../components/Error/ErrorHero'
import Header from '../components/Header/Header'

function Error() {
  return (
      <div>
          <Header />
          <ErrorHero />
          <ErrorBody/>    
      </div>
  )
}

export default Error