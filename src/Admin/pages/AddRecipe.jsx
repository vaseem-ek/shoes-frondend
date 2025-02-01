import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { Link, useNavigate } from 'react-router-dom'
import { addShoes } from '../../services/All_Api'
import { toast } from 'react-toastify'

function AddRecipe() {
    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")
    const [image4, setImage4] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [brand, setBrand] = useState("")
    const [color, setColor] = useState("")
    const [price, setPrice] = useState("")
    const [gender, setGender] = useState("")
    const [type, setType] = useState("")
    const [size, setSize] = useState([])
    const nav=useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const fd=new FormData()
            fd.append('image1',image1)
            fd.append('image2',image2)
            fd.append('image3',image3)
            fd.append('image4',image4)
            fd.append('name',name)
            fd.append('description',description)
            fd.append('brand',brand)
            fd.append('color',color)
            fd.append('price',price)
            fd.append('gender',gender)
            fd.append('shoeType',type)
            fd.append('size',size)

            const headers={
                'Content-type':'multipart/formdata',
                'Authorization':`Token ${sessionStorage.getItem('token')}`
            }
            const res=await addShoes(fd,headers)
            console.log(res)
            toast.success(res.data.message)
            nav('/admin/Allproduct')
            setImage1("")
            setImage2("")
            setImage3("")
            setImage4("")
            setName("")
            setDescription("")
            setBrand("")
            setColor("")
            setPrice("")
            setGender("")
            setType("")
            setSize([])
        } catch (error) {

        }
    }





    return (
        <div>
            <div>
                <SideBar />
                <div class="p-4 sm:ml-64">
                    <form action="" onSubmit={handleSubmit}>
                        <div class=" flex">
                            <div className='w-3/4 border-2 border-gray-200  rounded-lg dark:border-gray-700 p-4 '>
                                <div className='flex gap-2 '>
                                    <div class="flex flex-col items-center">
                                        <input id="image1" type="file" onChange={(e) => { setImage1(e.target.files[0]) }} className="hidden" />

                                        <label for="image1" className="cursor-pointer border-2 border-dashed rounded">
                                            <img
                                                src={!image1 ? "https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg" : URL.createObjectURL(image1)}
                                                alt="Click to upload"
                                                className="w-32 h-32 object-cover rounded-lg hover:opacity-80"
                                            />
                                        </label>
                                    </div>

                                    <div class="flex flex-col items-center">
                                        <input id="image2" type="file" onChange={(e) => { setImage2(e.target.files[0]) }} className="hidden" />

                                        <label for="image2" className="cursor-pointer border-2 border-dashed rounded">
                                            <img
                                                src={!image2 ? "https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg" : URL.createObjectURL(image2)}
                                                alt="Click to upload"
                                                className="w-32 h-32 object-cover rounded-lg hover:opacity-80"
                                            />
                                        </label>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <input id="image3" type="file" onChange={(e) => { setImage3(e.target.files[0]) }} className="hidden" />

                                        <label for="image3" className="cursor-pointer border-2 border-dashed rounded">
                                            <img
                                                src={!image3 ? "https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg" : URL.createObjectURL(image3)} alt="Click to upload"
                                                className="w-32 h-32 object-cover rounded-lg hover:opacity-80"
                                            />
                                        </label>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <input id="image4" type="file" onChange={(e) => { setImage4(e.target.files[0]) }} className="hidden" />

                                        <label for="image4" className="cursor-pointer border-2 border-dashed rounded">
                                            <img
                                                src={!image4 ? "https://t4.ftcdn.net/jpg/04/81/13/43/360_F_481134373_0W4kg2yKeBRHNEklk4F9UXtGHdub3tYk.jpg" : URL.createObjectURL(image4)} alt="Click to upload"
                                                className="w-32 h-32 object-cover rounded-lg hover:opacity-80"
                                            />
                                        </label>
                                    </div>




                                </div>
                                <div className='mt-2'>
                                    <input type="text" onChange={(e) => setName(e.target.value)} className='w-full outline outline-slate-200 rounded p-2' placeholder='Enter Shoe Name' />
                                </div>
                                <div className='mt-2'>
                                    <textarea type="text" onChange={(e) => setDescription(e.target.value)} className='w-full outline outline-slate-200 rounded p-2' placeholder='Enter Shoe description' />
                                </div>
                                <div className='mt-2'>
                                    <select
                                        className="px-4 py-2 border w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                                        onChange={(e) => setBrand(e.target.value)}
                                    >
                                        <option value="" disabled selected hidden>
                                            Select a brand
                                        </option>
                                        <option value="nike">nike</option>
                                        <option value="puma">puma</option>
                                        <option value="adidas">adidas</option>
                                        <option value="crocs">crocs</option>
                                        <option value="red-tape">red-tape</option>
                                    </select>
                                </div>
                                <div className='mt-2'>
                                    <select
                                        className="px-4 py-2 border w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                                        onChange={(e) => setColor(e.target.value)}
                                    >
                                        <option value="" disabled selected hidden>
                                            Select a color
                                        </option>
                                        <option value="red">red</option>
                                        <option value="black">black</option>
                                        <option value="white">white</option>
                                        <option value="yellow">yellow</option>
                                        <option value="blue">blue</option>

                                    </select>
                                </div>
                                <div className='mt-2'>
                                    <input type="number" onChange={(e) => setPrice(e.target.value)} className='w-full outline outline-slate-200 rounded p-2' placeholder='Enter Price' />
                                </div>

                                <div className='mt-2'>
                                    <select
                                        className="px-4 py-2 border w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option value="" disabled selected hidden>
                                            Select a gender
                                        </option>
                                        <option value="male">male</option>
                                        <option value="female">female</option>
                                        <option value="kids">kids</option>
                                        <option value="unisex">unisex</option>

                                    </select>
                                </div>
                                <div className='mt-2'>
                                    <select
                                        className="px-4 py-2 border w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                                        onChange={(e) => setType(e.target.value)}
                                    >
                                        <option value="" disabled selected hidden>
                                            Select a type
                                        </option>
                                        <option value="running">running</option>
                                        <option value="casual">casual</option>
                                        <option value="proffessinal">proffessional</option>

                                    </select>
                                </div>
                                <div className='mt-2'>
                                    <div className='flex gap-4'>
                                        {['6', '7', '8', '9', '10', '11'].map((sizeOption) => (
                                            <div key={sizeOption} onClick={() => setSize(prev =>
                                                prev.includes(sizeOption)
                                                    ? prev.filter(item => item !== sizeOption)
                                                    : [...prev, sizeOption] // ✅ Correctly adding size
                                            )}>
                                                <p className={`${size.includes(sizeOption) ? 'bg-pink-200' : 'bg-gray-300'} py-1 px-2 cursor-pointer`}>
                                                    {sizeOption}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                                <div className='flex mt-3 justify-between'>
                                    <Link to={'/dashboard'} className='py-2 px-3 bg-orange-400 rounded'> Cancel</Link>
                                    <button className='py-2 px-5 bg-green-400 rounded' type='submit'> add</button>
                                </div>

                            </div>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AddRecipe
