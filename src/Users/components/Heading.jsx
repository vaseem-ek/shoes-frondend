import React from 'react'

function Heading({ head,head2 }) {
    return (
        <>
        <div className='flex justify-center mt-5  '>
            <p className="border bg-black my-4 w-full bg-gradient-to-r h-1 from-[#990302] to-[#ebe2e0] rounded-full"></p>
            <div className='px-3 flex justify-center gap-2'>
                <h1 className='text-transparent text-xl lg:text-[4rem] bg-clip-text font-extrabold bg-gradient-to-r from-[#990302] to-[#ebe2e0]'>{head}</h1>
                <h1 className='text-transparent text-xl lg:text-[3rem] font-extrabold bg-clip-text bg-gradient-to-r to-[#990302] from-[#ebe2e0]'>{head2}</h1>
            </div>

            <p className="border bg-gradient-to-r h-1 to-[#990302] from-[#ebe2e0]  my-4 w-full rounded-full"></p>
        </div>
        </>
    )
}

export default Heading
