import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
    return (
        <div>
            <Navbar/>
            <div className='flex justify-center items-center flex-col'>
                <div class="w-full flex justify-center items-center h-80  bg-[url('https://static.vecteezy.com/system/resources/previews/019/897/278/non_2x/banner-with-two-pairs-of-red-youth-shoe-on-a-blue-wooden-surface-photo.jpg')] bg-cover bg-center">
                    <h3 className='text-xl lg:text-5xl font-extrabold'>CONTACT US</h3>

                </div>
                <div className='py-8'>
                    <p className='text-slate-400'>Any questions or remarks ? just write us a messages!</p>
                </div>
                <div className='flex justify-center my-3 gap-2 w-1/2'>
                    <div className='w-full'>
                        <input type="text" placeholder='enter your email' className='px-3 py-3 bg-slate-300 rounded-lg w-full' />
                    </div>

                    <div className='w-full'>
                        <input type="text" placeholder='enter your name' className='px-3 py-3 bg-slate-300 rounded-lg w-full' />
                    </div>

                </div>
                <div className='w-1/2 '>
                    <textarea name="" className='w-full bg-slate-300 p-3 rounded-lg' id="" placeholder='enter your suggestions...'></textarea>
                </div>
                <div className='w-1/2'>
                    <button className='w-full bg-sky-500 p-3 rounded-full'>SUBMIT</button>
                </div>
            </div>
            <div className='my-12 px-5'>
                <div className='grid grid-cols-1  lg:grid-cols-3 md:grid-cols-3'>
                    <div className='flex justify-center flex-col items-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2OqnvBvuxyEisr1dlHYpzasWD9Nsoz820w&s" width={100} alt="" />
                        <h3 className="font-bold">About Shoes</h3>
                        <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis corporis voluptatum, inventore nece</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img src="https://st4.depositphotos.com/3538103/40644/v/450/depositphotos_406449676-stock-illustration-cell-phone-vector-icon-telephone.jpg" width={100} alt="" />
                        <h3 className="font-bold">Phone No</h3>
                        <p className='text-slate-500'>+9876543678</p>
                        <p className='text-slate-500'>0483 5436748</p>
                    </div>
                    <div className='flex justify-center flex-col items-center'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQTWoKwNihxLL0QI1YyD6KJIfaWy98xKS90w&s" width={100} alt="" />
                        <h3 className="font-bold">Our Office Location</h3>
                        <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis corporis voluptatum, inventore nece</p>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default Contact
