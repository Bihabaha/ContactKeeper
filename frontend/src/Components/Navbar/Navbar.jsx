import React from 'react'
import Search from '../Search/Search'
import "./Navbar.css"
import {SiGnuprivacyguard} from "react-icons/si"
import {FiLogIn} from "react-icons/fi"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <Link className="navbar-brand text-light" to="/">Contact_Keeper</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav   m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link " aria-current="page" to="/about">About</Link>
        </li>
       
      </ul>
      <Search/>
      <div className='authentication'>
       <div className="/signup"> <span className='text-light'><SiGnuprivacyguard/></span> <Link to='/signup' >SignUp</Link></div>
       <div className='/login'><span className='text-light'><FiLogIn/></span> <Link to='/login' >Login</Link></div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar