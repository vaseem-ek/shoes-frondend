import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa6'

function Card() {
    const [saved,setSaved]=useState(false)
  return (
    <div className='my-2 flex justify-center items-center'>
      <div className='w-[18rem] rounded-lg shadow-black py-2  px-3 shadow'>
        <div className='flex justify-between py-2 '>
            <p>brand:<span className='text-blue-400 font-bold'>nike</span> </p>
            <FaHeart size={20} className={saved?  "text-red-700 cursor-pointer" :"text-gray-200 cursor-pointer"}onClick={()=>setSaved(!saved)} />
            
        </div>
        <div className=' overflow-hidden rounded-lg'>
            <img src="https://redtape.com/cdn/shop/files/RSO4102_1_c0a68240-77e5-4003-8465-bff2bb2280a7.jpg?v=1719938886" className='rounded-lg cursor-pointer hover:scale-110 duration-500 ' alt="" />
        </div>
        <div className=''>
            <p className='text-xl font-extrabold'>Nike Sports</p>
            <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quam unde magni, amet beatae voluptatem atque ea</p>
        </div>
        <div className='flex justify-between'>
            <p>color: <span className='font-bold text-slate-500'>white</span></p>
           <p>$: <span className='font-bold text-amber-400'>99.9</span></p>
        </div>
      

      </div>
    </div>
  )
}

export default Card
