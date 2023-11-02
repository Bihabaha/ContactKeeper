import React, { useState } from "react";
import { useContactContext } from "../../hooks/useContactContext";
import { useAuthContext } from "../../hooks/useAuthContext";
const Form = () => {
  const { dispatch } = useContactContext();
  const { user } = useAuthContext();
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if we dont have a user this shows error
    if (!user) {
      setError("You must be logged in");
      return;
    }

    const contact = { fullName, address, phoneNumber };
    const response = await fetch("/api/contacts", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json",
        //autorization
        'Authorization': `Bearer ${user.token}`
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setAddress("");
      setFullName("");
      setPhoneNumber("");
      setError(null);

      console.log("Contatct added");
      dispatch({ type: "CREATE_CONTACT", payload: json });
      console.log(contact);
    }
  };
  return (
    <div>
      <form
        className="bg-dark w-75 p-5 text-center  m-auto"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-light">Add a New contact</h1>
        <div className="mb-3">
          <label className="form-label text-light ">
            <span> Address</span>

            <input
              type="text"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              aria-describedby="Address"
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label text-light ">
            <span>Full Name</span>
            <input
              type="text"
              className="form-control"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label text-light  ">
            <span>Phone Number</span>
            <input
              type="phone"
              className="form-control"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary w-50">
          Submit
        </button>
        {error && (
          <div className="text-danger border-danger  bg-light p-2 border mt-2">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
