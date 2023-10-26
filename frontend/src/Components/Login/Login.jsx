import React from "react";

const Login = () => {
  return (
    <div className="container w-50 text-center mt-5 bg-dark text-light p-5 ">
      <form>
        <div className="mb-3">
          <label className="form-label">
            <span>Email</span>

            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Password</span>
            <input type="password" className="form-control" />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
