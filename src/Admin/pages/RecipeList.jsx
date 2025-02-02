import React, { useContext, useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { MdOutlineEdit } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { listShoe, removeShoe } from '../../services/All_Api'
import { BaseUrl } from '../../services/Base_Url'
import { useNavigate } from 'react-router-dom'

function RecipeList() {
    const [allShoes, setAllShoes] = useState([])
    useEffect(() => {
        getItem()
    }, [])
    const nav=useNavigate()

    const getItem = async () => {

        const header = {
            'Content-type': 'application/json',
            'Authorization': `Token ${sessionStorage.getItem('token')}`
        }
        const result = await listShoe(header)
        console.log(result.data.result);
        setAllShoes(result.data.result);

    }

    const handleDelete=async(id)=>{
        const header={
            'Content-type':'application/json',
            'Authorization':`Token ${sessionStorage.getItem('token')}`
        }
        const result=await removeShoe(id,header)
        console.log(result);
        
        getItem()
    }
    const handleEdit =(id)=>{
        nav(`/admin/edit/${id}`)
    }
    return (
        <div>
            <div>
                <SideBar />

                <div className="p-4 sm:ml-64">
                    <div className="p-4 border-2 border-gray-200  rounded-lg dark:border-gray-700">



                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            #
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Image
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            brand
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allShoes.length > 0 ?
                                            allShoes.map((item, key) => (

                                                <tr >
                                                    <th scope="row" className="px-6 py-4 font-medium">
                                                        {key + 1}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {item.name}
                                                    </td>

                                                    <td className="px-6 py-4">
                                                        <div>
                                                            {item.images && item.images.length > 0 ? ( // Check if images array exists and has at least one image
                                                                <img
                                                                    src={`${BaseUrl}/upload/${item.images[0].filename}`} // Use the first image
                                                                    width={50}
                                                                    alt={`${item.name} - Image 1`} // Alt text for the first image
                                                                    className="rounded-md border"
                                                                />
                                                            ) : (
                                                                <span className="text-red-500">No image available</span> // Fallback if no images exist
                                                            )}
                                                        </div>
                                                    </td>

                                                    <td className="px-6 py-4">
                                                        {item.brand}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        ${item.price}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className='flex gap-7 justify-center'>
                                                            <MdOutlineEdit onClick={()=>handleEdit(item._id)} size={25} className='cursor-pointer hover:text-green-600' />
                                                            <RxCross2 onClick={()=>handleDelete(item._id)} className='cursor-pointer hover:text-red-600' size={25} />

                                                        </div>

                                                    </td>
                                                </tr>
                                            ))
                                            :
                                            <div className='text-red-600 py-3  text-2xl'>
                                                no product addedd
                                            </div>
                                    }
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeList
