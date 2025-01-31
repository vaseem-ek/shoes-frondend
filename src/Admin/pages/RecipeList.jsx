import React, { useEffect } from 'react'
import SideBar from '../components/SideBar'
import { MdOutlineEdit } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { listShoe } from '../../services/All_Api'

function RecipeList() {
    useEffect(()=>{
        getItem()
    },[])

    const getItem=async()=>{

        const header={
            'Content-type':'application/json',
            'Authorization':`Token ${sessionStorage.getItem('token')}`
        }
        const result=await listShoe(header)
        console.log(result);
        
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
                                    <tr >
                                        <th scope="row" className="px-6 py-4 font-medium">
                                            1
                                        </th>
                                        <td className="px-6 py-4">
                                            jordhan
                                        </td>
                                        <td className="px-6 py-4">
                                            <img src="https://m.media-amazon.com/images/I/614aiM56siL._SL1500_.jpg" width={80} alt="" />
                                        </td>
                                        <td className="px-6 py-4">
                                            nike
                                        </td>
                                        <td className="px-6 py-4">
                                            $ 22
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className='flex gap-7 justify-center'>
                                                <MdOutlineEdit size={25} />
                                                <RxCross2 size={25} />

                                            </div>

                                        </td>
                                    </tr>
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
