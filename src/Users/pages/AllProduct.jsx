import React, { useState } from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function AllProduct() {
  const [color, setColor] = useState(false)
  const [gender, setGender] = useState(false)
  return (
    <>
      <Navbar />
      <div>
        <div className='grid grid-cols-[1fr_4fr]'>
          <div className='px-3 '>
            {/* filtering option */}
            <p className='text-2xl font-bold' onClick={() => { setColor(!color) }}>colors :</p>
            {
              color &&
              <div>

                <button className='border py-2 px-3 me-2 rounded'>red</button>
                <button className='border py-2 px-3 rounded m-2'>blue</button>
                <button className='border py-2 px-3 rounded m-2'>green</button>
                <button className='border py-2 px-3 rounded mt-2'>yellow</button>
                <button className='border py-2 px-3 rounded m-2'>yellow</button>
                <button className='border py-2 px-3 rounded m-2'>black</button>
              </div>
            }

            <p className='text-2xl font-bold' onClick={() => { setGender(!color) }}>gender :</p>
            {
              gender &&
              <div>

                <button className='border py-2 px-3 me-2 rounded'>male</button>
                <button className='border py-2 px-3 rounded m-2'>female</button>
                <button className='border py-2 px-3 rounded m-2'>kids</button>
                <button className='border py-2 px-3 rounded mt-2'>unisex</button>
              </div>
            }


          </div>
          <div className=' grid lg:grid-cols-4 grid-cols-1'>
            <Card /><Card /><Card /><Card /><Card />
          </div>
        </div>

      </div>
      <Footer />

    </>
  )
}

export default AllProduct
