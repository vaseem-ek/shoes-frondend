import React from 'react'
import Heading from './Heading'

function Brands() {
  return (
<>
<Heading head={"New"} head2={"Balance"}/>

<div className='grid grid-cols-1 lg:grid-cols-2 p-4' >
      <div className='flex justify-center' >
        <img src="https://img.freepik.com/premium-vector/flyer-men-s-shoes-advertisement_650465-560.jpg" className='w-full p-5 lg:w-[400px]' alt="" />
      </div>
      <div className='flex flex-col gap-4 justify-center items-center'>
        <h2 className='text-2xl lg:text-4xl font-bold '>new Features</h2>
        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis nulla deleniti doloribus molestias adipisci, iusto corrupti ad reiciendis dolor temporibus, fugiat harum. Id doloribus maiores exercitationem distinctio non tempora unde. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto officia perspiciatis quod ea atque esse repudiandae animi illo possimus voluptatibus iste eos doloremque, a quas temporibus, inventore nihil delectus? Soluta. Lorem ipsum dolor sit amet consectetur adipisicing tium rerum consequuntur nulla!</p>

      </div>
    </div>
</>
  )
}

export default Brands
