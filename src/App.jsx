import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import RecipeList from './Admin/pages/RecipeList'
import Dashborad from './Admin/pages/Dashborad'
import AddRecipe from './Admin/pages/AddRecipe'
import Home from './Users/pages/Home'
import AllProduct from './Users/pages/AllProduct'
import About from './Users/pages/About'
import Contact from './Users/pages/Contact'
import Register from './Users/components/Register'
import Login from './Users/components/Login'
import { ToastContainer } from 'react-toastify';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <ToastContainer/>
      <Routes>
        {/* admin */}
        <Route path='admin' element={<Dashborad/>}/>
        <Route path='admin/Allproduct' element={<RecipeList/>}/>
        <Route path='admin/Add' element={<AddRecipe/>}/>
        {/* users */}
        <Route path='/' element={<Home/>} />
        <Route path='allProduct' element={<AllProduct/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>} />

      </Routes>

    </>
  )
}

export default App
