import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [term,setTerm]=useState("")
  const Navigate = useNavigate()
  const handleSubmit=(e)=>{
    e.preventDefault()
    //query parametre 
   
    Navigate(`/search?=${term}`)
  }
  return (
    <div>
        <form className="d-flex" role="search" onSubmit={handleSubmit} >
        {/*<button className=" me-5 btn  w-25  btn-outline-light" type="submit">Search</button>*/}
        <input className=" bg-light  form-control m-auto w-75 text-center  m-auto my-1 " type="search" placeholder="Search" aria-label="Search" required id='search'onChange={e=>setTerm(e.target.value)}/>
      </form>
    </div>
  )
}

export default Search