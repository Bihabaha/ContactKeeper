import React from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
const App = () => {
  return (
    <div className='text-center
'>
      <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>

  <Route path='/login' element={<Login/>}></Route>
  <Route path='/signup' element={<Register/>}></Route>
</Routes>
    </div>
  )
}

export default App