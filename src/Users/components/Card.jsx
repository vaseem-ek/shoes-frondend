import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa6';
import { BaseUrl } from '../../services/Base_Url';
import { useNavigate } from 'react-router-dom';

function Card({ item }) {
  const nav=useNavigate()
  const [saved, setSaved] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);


  return (
    <div className="flex justify-center items-center">
      <div className="w-[18rem] h-[450px] flex flex-col justify-between rounded-lg shadow-lg py-4 px-5 bg-white transition-all duration-300 hover:shadow-2xl border border-gray-200">
        
        {/* Brand and Favorite Icon */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-sm">
            Brand: <span className="text-blue-500 font-semibold">{item.brand || 'N/A'}</span>
          </p>
          <FaHeart
            size={22}
            className={`cursor-pointer mb-2 transition-all duration-300 ${saved ? 'text-red-600 scale-110' : 'text-gray-300 hover:text-gray-500'}`}
            onClick={() => setSaved(!saved)}
          />
        </div>

        {/* Product Image */}
        <div className="overflow-hidden rounded-lg h-[160px] flex justify-center items-center" >
          {item.images && item.images.length > 0 ? (
            <img
              src={`${BaseUrl}/upload/${item.images[0].filename}`}
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

        {/* Price & Color */}
        <div className="flex justify-between items-center border-t pt-2 mt-2">
          <p className="text-gray-600 text-sm">
            Color: <span className="font-semibold text-gray-700">{item.color || 'N/A'}</span>
          </p>
          <p className="text-lg font-bold text-amber-500">
            ${item.price ? item.price.toFixed(2) : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
