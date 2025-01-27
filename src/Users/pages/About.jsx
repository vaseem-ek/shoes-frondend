import React from 'react'
import Footer from '../components/Footer'
import Subscription from '../components/Subscription'
import Navbar from '../components/Navbar'

function About() {
    return (
        <>
        <Navbar/>
        
        <div className='my-4 lg:px-24'>
            <div className='grid gap-2 grid-cols-1 lg:grid-cols-2 px-5 '>
                <div className='flex justify-center items-start flex-col '>
                    <p className='text-slate-300 text-xl font-bold'>ABOUT US</p>
                    <p className='text-2xl font-extrabold '>SHOES ONLINE</p>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum accusantium dolor, tenetur, aspernatur deleniti eius reprehenderit quos esse, at explicabo iure. Quaerat ut id obcaecati veritatis iusto incidunt, quia quibusdam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem cupiditate excepturi, optio nostrum aliquid quod non ducimus officiis porro dolor doloribus aspernatur, repellendus, eveniet ipsam unde molestiae adipisci architecto ad.</p>
                    <button className='py-2 px-3 bg-black text-white mt-2'>Sign Up</button>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="https://png.pngtree.com/png-vector/20231230/ourmid/pngtree-dropshipping-men-hole-sole-jogging-shoes-png-image_11389148.png" className='w-3/4' alt="" />
                </div>
            </div>
            <Subscription/>

        </div>
        <Footer/>
        </>
    )
}

export default About
