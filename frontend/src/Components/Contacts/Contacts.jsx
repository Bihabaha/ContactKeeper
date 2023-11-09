import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./Contacts.css";
import { useContactContext } from "../../hooks/useContactContext";
import { useAuthContext } from "../../hooks/useAuthContext";

const Contacts = ({ contact }) => {
  const { dispatch } = useContactContext();
  const { user } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContact, setEditedContact] = useState({
    fullName: contact.fullName,
    phoneNumber: contact.phoneNumber,
    address: contact.address,
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  //Remove Contact
  const handleClick = async () => {
    if (!user) {
      return;
    }
    const response = await fetch("/api/contacts/" + contact._id, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();
  
    if (response.ok) {
      dispatch({ type: "REMOVE_CONTACT", payload: json });
    }
  };

  //Update or edit contact
  const handleSave = async () => {
    const response = await fetch("/api/contacts/" + contact._id, {
      method: "PATCH",
      body: JSON.stringify(editedContact),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user.token}`,
      },
    });
  
    if (response.ok) {
      // Fetch the updated contact separately
      const updatedContactResponse = await fetch("/api/contacts/" + contact._id, {
        headers: {
          'Authorization': `Bearer ${user.token}`,
        },
      });
  
      const updatedContactJson = await updatedContactResponse.json();
  
      // Now dispatch the updated data
      dispatch({ type: "UPDATE_CONTACT", payload: updatedContactJson });
      setIsEditing(false);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="card w-75 m-auto mt-4 mb-2 rounded ">
        {isEditing ? (
          <div className="card-body">
          <div className="mb-3">
            <label htmlFor="fullName" className="text-light mb-2 fs-5">
              <AiOutlineUser />
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={editedContact.fullName}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="text-light mb-2  fs-5">
              <BsFillPhoneFill />
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={editedContact.phoneNumber}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        
          <div className="mb-3">
            <label htmlFor="address" className=" mb-2  text-light fs-5">
              <MdEmail />
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={editedContact.address}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        
          <button onClick={handleSave} className="btn btn-primary">
            Save
          </button>
        </div>
        
        ) : (
          <div className="card-body">
            <p className="mb-3 text-light   ">
              <span className="text-light  fs-5">
                <AiOutlineUser />
              </span>{" "}
              {contact.fullName}
            </p>
            <p className="mb-3 text-light ">
              <span className="text-light fs-5">
                <BsFillPhoneFill />
              </span>{" "}
              {contact.phoneNumber}
            </p>
            <p className="mb-3 text-light ">
              <span className="text-light fs-5">
                <MdEmail />
              </span>{" "}
              {contact.address}
            </p>
            <div className="icon-update-remove float-end ">
              <span className="text-success fs-3 " onClick={handleEdit}>
                <BiEdit />
              </span>
              <span className="text-danger fs-3 " onClick={handleClick}>
                <RiDeleteBinLine />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
