import React, { useState } from 'react'
import Navbar from './Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { registetApi } from '../../services/All_Api'
import { toast } from 'react-toastify'



function Register() {
    const [userData, setUserData] = useState({
        username: "", email: "", password: ""
    })
    const nav = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { username, email, password } = userData
        if (!username || !email || !password) {
            alert("fill in the fields")
        }
        const result = await registetApi(userData)
        console.log(result)
        if (result.status == 201) {
            nav('/login')
            toast.success("registraion success")
            setUserData({
                username: "", email: "", password: ""
            })
        } else {
            toast.error(result.response.data.message);

        }

    }
    return (
        <>
            <div>
                <Navbar />
                <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                    <div className="bg-white border shadow-2xl p-6 rounded-lg flex flex-col md:flex-row gap-6 w-full max-w-4xl">
                        {/* Image Section */}
                        <div className="flex justify-center items-center md:w-1/2">
                            <img
                                src="https://i.pinimg.com/736x/ab/f5/a3/abf5a351dc1dbef4cb2c625cf6b6a975.jpg"
                                alt="Registration"
                                className="rounded-lg shadow-lg w-full max-w-sm"
                            />
                        </div>

                        {/* Form Section */}
                        <div className="flex flex-col justify-center items-center md:w-1/2 w-full">
                            <h3 className="text-red-500 text-2xl md:text-3xl font-bold mb-4 text-center">
                                Register Form
                            </h3>
                            <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="py-2 px-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-400 mb-2 w-full"
                                    required
                                    onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }}
                                />
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="py-2 px-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-400 mb-2 w-full"
                                    required
                                    onChange={(e) => { setUserData({ ...userData, username: e.target.value }) }}

                                />
                                <input
                                    type="password"
                                    placeholder="Enter Your Password"
                                    className="py-2 px-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-green-400 mb-2 w-full"
                                    required
                                    onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }}

                                />
                                <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                                    <Link to="/login" className="text-sm hover:text-sky-400 text-slate-600 ">
                                        Already Registered?
                                    </Link>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full"
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
