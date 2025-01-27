import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Offers from '../components/Offers'
import Brands from '../components/Brands'
import Footer from '../components/Footer'
import Subscription from '../components/Subscription'

function Home() {
  return (
    <>
    <Navbar/>
    <div className='px-5'>
    <Hero/>
    <Offers/>
    <Brands/>
    <Subscription/>
    <hr />
    <Footer/>
    </div>

      
    </>
  )
}

export default Home
