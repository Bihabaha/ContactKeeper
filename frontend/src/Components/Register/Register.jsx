import React from 'react'

const Register = () => {
  return (
    <div className='container w-50 bg-dark mt-5 text-center text-light '>
      <form className='p-5'>
        <div className="mb-3">
          <label className="form-label">
            <span>Full Name</span>

            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div className="mb-3">
          <label  className="form-label">
            <span>Email</span>

            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
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
              id="exampleInputPassword1"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span> Retype Password</span>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
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

export default Register