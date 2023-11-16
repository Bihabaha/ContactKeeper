import React, { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import "./Register.css"
import { useTheme } from "../../hooks/UseContextHook";
const Register = () => {
  const {color}=useTheme()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const {signup ,error,isLoading}=useSignup()


  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <div className="container w-75  mt-5 text-center text-light " style={{background:color}} >
      <form className="p-5" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label className="form-label">
            <span className="">Email</span>

            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span> Password</span>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
        </div>

        <button disabled={isLoading} type="submit" className="btn btn-primary">
          Sign Up
        </button>
        {error&&<div className="text-danger bg-light mt-2 ">{error}</div>}
      </form>
    </div>
  );
};

export default Register;
