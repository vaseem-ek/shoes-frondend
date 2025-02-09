import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getspecific } from '../../services/All_Api';
import { BaseUrl } from '../../services/Base_Url';
import Navbar from '../components/Navbar';
import RelatedProduct from '../components/RelatedProduct';
import Footer from '../components/Footer';
import Heading from '../components/Heading'
import { FaHeart } from 'react-icons/fa6';

function Product() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0)
    const [size, setSize] = useState('')
    const [saved, setSaved] = useState(false);


    useEffect(() => {
        getProduct();
    }, [id]);

    const getProduct = async () => {
        try {
            const res = await getspecific(id);
            setData(res.data);




            if (res.data.images && res.data.images.length > 0) {
                setCurrentIndex(0);
            }
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === data.images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div>
            <Navbar />
            <div>
                <div className="grid justify-center mt-10 sm:mt-3 items-center grid-cols-1 lg:grid-cols-2 md:grid-cols-2">

                    <div className="flex flex-col items-center relative w-full px-10">
                        {data.images?.length > 0 && (
                            <div className="relative w-[400px]  border-orange-400 shadow-md shadow-orange-300 h-[400px] flex justify-center items-center">
                                <button onClick={prevImage} className="absolute left-2 bg-gray-800 text-white p-2 rounded-full">
                                    ❮
                                </button>

                                <img
                                    src={`${BaseUrl}/upload/${data.images[currentIndex].filename}`}
                                    alt="Product"
                                    className="w-full h-full object-contain rounded-lg shadow-md"
                                />
                                <FaHeart
                                    size={30}
                                    className={`cursor-pointer mb-2 transition-all duration-300 absolute top-2 right-3 ${saved ? 'text-red-600 scale-110' : 'text-gray-300 hover:text-gray-500'}`}
                                    onClick={() => setSaved(!saved)}
                                />                                <button onClick={nextImage} className="absolute right-2 bg-gray-800 text-white p-2 rounded-full">
                                    ❯
                                </button>
                            </div>
                        )}

                        <div className="flex mt-4 space-x-2 overflow-x-auto">
                            {data.images?.map((item, index) => (
                                <img
                                    key={index}
                                    src={`${BaseUrl}/upload/${item.filename}`}
                                    width={60}
                                    className={`cursor-pointer rounded-md border-2 p-1 
                    ${index === currentIndex ? "border-orange-500" : "border-gray-300"}`}
                                    alt="Thumbnail"
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className='px-10'>
                            <tr >
                                <td className="font-bold text-xl text-orange-300 hover:drop-shadow-md">{data.name}</td>
                            </tr>
                            <hr />
                            <tr>
                                <td className="text-md text-slate-500 px-2">
                                    <span className="text-black">Description:</span> {data.description}
                                </td>
                            </tr>

                            <tr>
                                <td className="text-md text-slate-500 px-2">
                                    <span className="text-black">Gender:</span> {data.gender}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-md text-slate-500 px-2">
                                    <span className="text-black">Brand:</span> {data.brand}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-md text-slate-500 px-2">
                                    <span className="text-black">Color:</span> {data.color}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-md text-slate-500 px-2">
                                    <span className="text-black">Price:</span> $ {data.price}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-md text-slate-500 px-2">
                                    <span className="text-black">Type:</span> {data.shoeType}
                                </td>
                            </tr>
                            <div className="my-4">
                                <h4 className="text-lg font-semibold">Available Sizes:</h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {data?.size?.map((item, index) => (
                                        <span
                                            key={index}
                                            onClick={() => setSize(item)}
                                            className={`cursor-pointer px-3 py-2 rounded-md text-black  bg-gray-300
                                                ${item === size ? ' border-2 border-orange-700' : 'border-white'}`}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>



                            <button className='bg-black px-3 py-2 rounded text-white hover:shadow-orange-400 hover:shadow-md'>Add To Cart</button>
                            <div className='mt-4'>
                                <p className='text-slate-400'>100 % original product</p>
                                <p className='text-slate-400'>Cash On deliver is available on this product</p>
                                <p className='text-slate-400'>Easy return and exchange policy is availble</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='my-2 lg:px-10  md:px-5 px-2' >
                    <div className='flex'>
                        <p className='py-3 px-2 border '>Description</p>
                        <p className='py-3 px-2 border '>Review (22)</p>
                    </div>
                    <div className='border w-full flex px-3 py-4 flex-col gap-3'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id itaque excepturi ad quas voluptas pariatur vitae magnam repudiandae, fuga eligendi, maiores repellendus perspiciatis aspernatur soluta optio? Nostrum eum soluta vel!

                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id itaque excepturi ad quas voluptas pariatur vitae magnam repudiandae, fuga eligendi, maiores repellendus perspiciatis aspernatur soluta optio? Nostrum eum soluta vel!

                        </p>
                    </div>

                </div>
                <div className='mt-20'>
                    <Heading head={'RELATED'} head2={'PRODUCT'} />

                </div>
                <div>
                    <RelatedProduct items={data} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Product;
