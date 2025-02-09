import React, { useContext, useEffect } from 'react'
import Heading from './Heading'
import ResponseContext from '../../ContextApi/responseContext'
import { BaseUrl } from '../../services/Base_Url'
import { useNavigate } from 'react-router-dom'

function Offers() {
  const nav=useNavigate()

  const { response } = useContext(ResponseContext)
  useEffect(() => {
    console.log(product);

  }, [response])
  const product = response.slice(-4, -1)
  const handleShow=(id)=>{
    nav(`/product/${id}`)
  }
  return (
    <div className="py-5 px5">
      <Heading head={"Latest"} head2={"Shoes"} />
      <div className="pt-5 flex flex-wrap gap-5 justify-center shadow-zinc-800">
        {/* Product Card 1 */}
        {
          product.map(item => (

            <div className=" grid grid-cols-1 md:grid-cols-3 rounded border border-black">
              {item.images && item.images.length > 0 ? (
                <img
                  src={`${BaseUrl}/upload/${item.images[0].filename}`}
                  onClick={() => handleShow(item._id)}
                  alt={`${item.name || 'Product'} - Image`}
                  className="rounded-md border w-full h-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <span className="text-red-500">No image available</span>
              )}
              <div className="p-2">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-800"> ${item.price}</p>
                <p className="text-slate-700">
                  {item.description}</p>
              </div>
            </div>
          ))
        }



      </div>
    </div>

  )
}

export default Offers
