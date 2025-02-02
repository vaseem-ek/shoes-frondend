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
import Product from './Users/pages/Product'
import Edit from './Admin/components/Edit'


function App() {

  return (
    <>

        <ToastContainer/>
      <Routes>
        {/* admin */}
        <Route path='admin' element={<Dashborad/>}/>
        <Route path='/admin/Allproduct' element={<RecipeList/>}/>
        <Route path='/admin/Add' element={<AddRecipe/>}/>
        <Route path='/admin/edit/:id' element={<Edit/>}/>
        {/* users */}
        <Route path='/' element={<Home/>} />
        <Route path='/allProduct' element={<AllProduct/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/product/:id' element={<Product/>} />

      </Routes>

    </>
  )
}

export default App
