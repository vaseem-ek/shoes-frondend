import React from 'react'
import Heading from './Heading'

function Offers() {
    return (
        <div className="py-5 px5">
        <Heading head={"Offer"} head2={"Zone"} />
        <div className="pt-5 flex flex-wrap gap-5 justify-center shadow-zinc-800">
          {/* Product Card 1 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 rounded border border-black">
            <img
              src="https://redtape.com/cdn/shop/files/RSO4102_1_c0a68240-77e5-4003-8465-bff2bb2280a7.jpg?v=1719938886"
              className="rounded-t"
              alt="nike product"
            />
            <div className="p-2">
              <h3 className="text-xl font-bold">nike</h3>
              <p className="text-gray-800">44 $</p>
              <p className="text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                harum cupiditate, ad hic eaque voluptas
              </p>
            </div>
          </div>
          {/* Product Card 2 */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 rounded border border-black">
            <img
              src="https://redtape.com/cdn/shop/files/RSO4102_1_c0a68240-77e5-4003-8465-bff2bb2280a7.jpg?v=1719938886"
              className="rounded-t"
              alt="nike product"
            />
            <div className="p-2">
              <h3 className="text-xl font-bold">nike</h3>
              <p className="text-gray-800">44 $</p>
              <p className="text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                harum cupiditate, ad hic eaque voluptas
              </p>
            </div>
          </div>
          {/* Product Card 3 */}
          <div className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/5 rounded border border-black">
            <img
              src="https://redtape.com/cdn/shop/files/RSO4102_1_c0a68240-77e5-4003-8465-bff2bb2280a7.jpg?v=1719938886"
              className="rounded-t"
              alt="nike product"
            />
            <div className="p-2">
              <h3 className="text-xl font-bold">nike</h3>
              <p className="text-gray-800">44 $</p>
              <p className="text-slate-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                harum cupiditate, ad hic eaque voluptas
              </p>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default Offers
