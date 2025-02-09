import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { getSaved, removeSaveApi } from '../../services/All_Api'
import { FaHeart } from 'react-icons/fa6';
import { BaseUrl } from '../../services/Base_Url'
import ResponseContext from '../../ContextApi/responseContext';
import { useNavigate } from 'react-router-dom';

function Save() {
  const [showFullDescription, setShowFullDescription] = useState(false);
const {setSavedData}=useContext(ResponseContext)
    const [items, setItems] = useState([])
    const nav=useNavigate()

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {

        const header = {
            'Content-type': 'application/json',
            'Authorization': `Token ${sessionStorage.getItem('token')}`
        }

        const res = await getSaved(header)
        // console.log(res.data.message);
        setItems(res.data.message)
        setSavedData(res.data.message)

    }

    const removeSaved=async(id)=>{
        const header = {
            'Content-type': 'application/json',
            'Authorization': `Token ${sessionStorage.getItem('token')}`
        }
        const result=await removeSaveApi(id,header)
        console.log(result);
        getdata()
        
        
    }
    const handleShow=(id)=>{
        nav(`/product/${id}`)
      }

    return (
        <div>
            <Navbar />
            <div>
                <div className="flex flex-wrap gap-3 justify-center items-center">
                    {
                        items.map(item => (
                            <div className="w-[18rem] h-[350px] flex flex-col flex-wrap justify-between rounded-lg shadow-lg py-4 px-5 bg-white transition-all duration-300 hover:shadow-2xl border border-gray-200">

                                <div className="flex justify-between items-center">
                                    <p className="text-gray-600 text-sm">
                                        Brand: <span className="text-blue-500 font-semibold">{item.brand || 'N/A'}</span>
                                    </p>
                                    <FaHeart
                                        size={22}
                                        className={`cursor-pointer mb-2  transition-all duration-300 text-red-500 `}
                                        onClick={()=>removeSaved(item._id)}
                                    />
                                </div>

                                {/* Product Image */}
                                <div className="overflow-hidden rounded-lg h-[160px] flex justify-center items-center" >
                                    {item.images && item.images.length > 0 ? (
                                        <img
                                            src={`${BaseUrl}/upload/${item.images[0].filename}`}
                                            onClick={() => handleShow(item.shoeId)}
                                            alt={`${item.name || 'Product'} - Image`}
                                            className="rounded-md border w-full h-full cursor-pointer object-cover transition-transform duration-300 hover:scale-105"

                                        />
                                    ) : (
                                        <span className="text-red-500">No image available</span>
                                    )}
                                </div>

                                {/* Product Details */}
                                <div className="flex flex-col flex-grow mt-2">
                                    <p className="text-lg font-bold text-gray-800">{item.name || 'No Name'}</p>
                                    <p className={`text-sm text-gray-600 ${showFullDescription ? "" : "line-clamp-3"}`}>
                                        {item.description || 'No description available'}
                                    </p>
                                    {item.description && item.description.length > 50 && (
                                        <button
                                            className="text-blue-500 text-xs font-medium mt-1 hover:underline"
                                            onClick={() => setShowFullDescription(!showFullDescription)}
                                        >
                                            {showFullDescription ? "Read Less" : "Read More"}
                                        </button>
                                    )}
                                </div>

                                
                            </div>
                        ))

                    }

                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Save
