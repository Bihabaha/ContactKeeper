import React from "react";

const Form = () => {
  return (
    <div>
      <form>
        <h1 className="text-center text-warning">Add contact</h1>
        <div className="mb-3">
          <label className="form-label">
            <span> Address</span>

            <input
              type="email"
              className="form-control"
              
              aria-describedby="Address"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <span>Password</span>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </label>
        </div>
        <div className="mb-3">
          <label  className="form-label">
            <span>Phone Number</span>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
