import React from "react";
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
const {user}=useAuthContext()
  const handleClick = async () => {
    if(!user){
      return
    }
    const response = await fetch("/api/contacts/" + contact._id, {
      method: "DELETE",

      //authorization 
      header:{
        'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "REMOVE_CONTACT", payload: json });
    }
  };
  return (
    <div>
      <div className="card w-75  m-auto mt-4 mb-2 rounded ">
       { <div className="card-body d-flex ">
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
          <div className="icon-update-remove ">
            <span className="text-success fs-3 ">
              <BiEdit />
            </span>
            <span className="text-danger fs-3 " onClick={handleClick}>
              <RiDeleteBinLine />
            </span>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Contacts;
