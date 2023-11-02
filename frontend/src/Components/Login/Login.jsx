import React, { useState } from 'react'

const Login = () => {

  const [email,setEmail]= useState("")
  const [password,setPassword]=useState("")
  const handleSubmit=async(e)=>{
    e.preventDefault()

    console.log(email,password)

  }
  return (
    <div className='container w-50 bg-dark mt-5 text-center text-light '>
      <form className='p-5' onSubmit={handleSubmit}>
      <h3 className='text-center'>Login</h3>
        <div className="mb-3">
          <label  className="form-label">
            <span>Email</span>

            <input
              type="email"
              className="form-control"
             onChange={e=>setEmail(e.target.value)}
             value={email}
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div className="mb-3">
          <label  className="form-label">
            <span>  Password</span>
            <input
              type="password"
              className="form-control"
              onChange={e=>setPassword(e.target.value)}
              value={password}
              
            />
          </label>
        </div>
     
      

        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Login