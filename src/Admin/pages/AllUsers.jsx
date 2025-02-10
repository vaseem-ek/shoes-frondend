import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { allUserApi } from '../../services/All_Api'

function AllUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUser()
    }, [])

    const getAllUser = async () => {
        const header = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${sessionStorage.getItem('token')}`
        }
        const res = await allUserApi(header)
        console.log(res.data.result);
        setUsers(res.data.result)

    }
    return (
        <div>
            <div>
                <SideBar />

                <div className="p-4 sm:ml-64">
                    <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-400 rounded-lg shadow-md bg-white">
                            <thead className="bg-gray-100 border-b">
                                <tr>
                                    <th className="px-4 py-2 text-left text-gray-600 uppercase">#</th>
                                    <th className="px-4 py-2 text-left text-gray-600 uppercase">Name</th>
                                    <th className="px-4 py-2 text-left text-gray-600 uppercase">Email</th>
                                    <th className="px-4 py-2 text-left text-gray-600 uppercase">Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((item, key) => (


                                        <tr
                                            className={`border-b ${key % 2 === 0 ? "bg-white" : "bg-gray-100"
                                                } hover:bg-gray-200 transition duration-200 `}
                                        >
                                            <td className="px-4 py-2 ">{key + 1}</td>
                                            <td className="px-4 py-2">{item.username}</td>
                                            <td className="px-4 py-2">{item.email}</td>
                                            <td className="px-4 text-orange-600 font-medium py-2">{item.role}</td>

                                        </tr>

                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllUsers
