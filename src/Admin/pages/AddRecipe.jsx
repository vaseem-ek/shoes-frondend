import React, { useEffect, useState } from 'react'
import SideBar from '../components/SideBar'
import { Link } from 'react-router-dom'

function AddRecipe() {
    const [image1, setImage1] = useState("")
    const [image2, setImage2] = useState("")
    const [image3, setImage3] = useState("")
    const [image4, setImage4] = useState("")
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [brand,setBrand]=useState("")
    const [color,setColor]=useState("")
    const [price,setPrice]=useState("")
    const [gender,setGender]=useState("")
    const [type,setType]=useState("")
    const [size,setSize]=useState([])
    const [stock,setStock]=useState(0)
    

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(image1)
        console.log(image2)
        console.log(image3)
        console.log(image4)
        console.log(name)
        console.log(description)
        console.log(brand)
        console.log(color)
        console.log(price)
        console.log(gender)
        console.log(type)
        console.log(size)
        console.log(stock)
    }

    const handleChecked=(e)=>{
        const value=e.target.value
        if(e.target.checked){
            setSize([...size,value])
        }else{
            setSize(size.filter(item=>item!==value))
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
                            <div className='flex gap-2 justify-between'>
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
                                <input type="text" onChange={(e)=>setName(e.target.value)}  className='w-full outline outline-slate-200 rounded p-2' placeholder='enter Shoe Name' />
                            </div>
                            <div className='mt-2'>
                                <textarea type="text"onChange={(e)=>setDescription(e.target.value)} className='w-full outline outline-slate-200 rounded p-2' placeholder='enter Shoe description' />
                            </div>
                            <div className='mt-2'>
                                <select
                                    className="px-4 py-2 border w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                                    onChange={(e)=>setBrand(e.target.value)}
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
                                    onChange={(e)=>setColor(e.target.value)}
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
                                <input type="number" onChange={(e)=>setPrice(e.target.value)} className='w-full outline outline-slate-200 rounded p-2' placeholder='enter price' />
                            </div>
                            <div className='mt-2'>
                                <input type="number" onChange={(e)=>setStock(e.target.value)} className='w-full outline outline-slate-200 rounded p-2' placeholder='enter available stock' />
                            </div>
                            <div className='mt-2'>
                                <select
                                    className="px-4 py-2 border w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500"
                                    onChange={(e)=>setGender(e.target.value)}
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
                                    onChange={(e)=>setType(e.target.value)}
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
                                <div>
                                    <h3 className='my-3 text-2xl font-bold'>select sizes:</h3>
                                    <div className='flex justify-between'>
                                        <div class="flex items-center me-2">
                                            <input id="4" type="checkbox" onChange={handleChecked}  value="4" class="w-6 h-6 border-gray-300 rounded  focus:ring-2" />
                                            <label for="4" class="ms-2 text-sm font-medium text-gray-900 ">4</label>
                                        </div>
                                        <div class="flex items-center me-2">
                                            <input id="5" type="checkbox" onChange={handleChecked} value="5"class="w-6 h-6 border-gray-300 rounded  focus:ring-2" />
                                            <label for="5" class="ms-2 text-sm font-medium text-gray-900 ">5</label>
                                        </div>
                                        <div class="flex items-center me-2">
                                            <input id="6" type="checkbox" onChange={handleChecked} value="6" class="w-6 h-6 border-gray-300 rounded  focus:ring-2" />
                                            <label for="6" class="ms-2 text-sm font-medium text-gray-900 ">6</label>
                                        </div>
                                        <div class="flex items-center me-2">
                                            <input id="7" type="checkbox" onChange={handleChecked} value="7" class="w-6 h-6 border-gray-300 rounded  focus:ring-2" />
                                            <label for="7" class="ms-2 text-sm font-medium text-gray-900 ">7</label>
                                        </div>
                                        <div class="flex items-center me-2">
                                            <input id="8" type="checkbox" onChange={handleChecked} value="8" class="w-6 h-6 border-gray-300 rounded  focus:ring-2" />
                                            <label for="8" class="ms-2 text-sm font-medium text-gray-900 ">8</label>
                                        </div>
                                        <div class="flex items-center me-2">
                                            <input id="9" type="checkbox" onChange={handleChecked} value="9" class="w-6 h-6 border-gray-300 rounded  focus:ring-2" />
                                            <label for="9" class="ms-2 text-sm font-medium text-gray-900 ">9</label>
                                        </div>
                                        <div class="flex items-center me-2">
                                            <input id="10" type="checkbox" onChange={handleChecked} value="10" class="w-6 h-6 border-gray-300 rounded  focus:ring-2" />
                                            <label for="10" class="ms-2 text-sm font-medium text-gray-900 ">10</label>
                                        </div>
                                        <div class="flex items-center me-2">
                                            <input id="11" type="checkbox" onChange={handleChecked} value="11" class="w-6 h-6 border-gray-300 rounded  focus:ring-2" />
                                            <label for="11" class="ms-2 text-sm font-medium text-gray-900 ">11</label>
                                        </div>
                                        <div class="flex items-center me-2">
                                            <input id="12" type="checkbox" onChange={handleChecked} value="12" class="w-6 h-6 border-gray-300 rounded  focus:ring-2" />
                                            <label for="12" class="ms-2 text-sm font-medium text-gray-900 ">12</label>
                                        </div>
                                    </div>
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
