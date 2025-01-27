import React from 'react'

function Subscription() {
  return (
    <div className='py-3 lg:py-10'>
      <div className='grid grid-cols-1  lg:grid-cols-3 md:grid-cols-3'>
        <div className='flex justify-center flex-col items-center'>
            <img src="https://cdn-icons-png.flaticon.com/512/5735/5735271.png" width={100} alt="" />
            <h3 className="font-bold">Easy exachane Policy</h3>
            <p className='text-slate-500'>we offer free exchsngr policy</p>
        </div>
        <div className='flex justify-center flex-col items-center'>
            <img src="https://img.freepik.com/premium-vector/return-box-package-policy-sign-goods-exchange-line-icon-delivery-box-vector-illustration_476325-1842.jpg" width={100} alt="" />
            <h3 className="font-bold">7 day Return Policy</h3>
            <p className='text-slate-500'>we provide 7 days free retun policy</p>
        </div>
        <div className='flex justify-center flex-col items-center'>
            <img src="https://cdn-icons-png.flaticon.com/512/8781/8781830.png" width={100} alt="" />
            <h3 className="font-bold">Best Customer support</h3>
            <p className='text-slate-500'>we provide 24/7 customer support</p>
        </div>
      </div>
      <div className='mt-4 lg:mt-11'>
        <div className='flex justify-center items-center flex-col'>
            <h3 className='text-2xl font-bold '>Subscribe now & get 20% off </h3>
            <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem libero volup</p>
            <div className='w-1/2 flex mt-3'>
                <input type="text" placeholder='Enter your email' className='w-full p-2 border '/>
                <button className='bg-black p-2  text-white'>Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
