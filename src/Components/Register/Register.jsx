import React from 'react'

const Register = () => {
  return (
    <div classNameName='container mt-5'>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
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
          <label for="exampleInputEmail1" className="form-label">
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
          <label for="exampleInputPassword1" className="form-label">
            <span>  Password</span>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </label>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
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