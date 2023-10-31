import React from 'react'
import Banner from './Banner'
import "../Home/Home.scss"
import FeaturedProducts from '../../Components/Products/FeaturedProducts'
import Category from '../../Components/Category/Category'
import Share from './Share'

const Home = () => {
  return (
    <div className='home'>
      <Banner/>
      <FeaturedProducts/>
      <Category/>
    </div>
  )
}

export default Home
