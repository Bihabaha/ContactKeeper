import React, { useEffect, useState } from "react";

import Form from "../Form/Form";

const Home = () => {
  const[contacts,setContacts]=useState(null)
  useEffect(()=>{
  const fetchContact=async()=>{
  const response= await fetch("/api/contacts")
  const json = await response.json()
  if(response.ok){
    setContacts(json)
  }
  }
  fetchContact()
  },[])
  return (
    <div>
      <div className="contacts">
       {contacts&&contacts.map((contact)=>(
        <p key={contact._id} >{contact.fullName}</p>
       ))}
      </div>
      <div className=" mt-5">
        <div className="row">
          <div className="col-lg-8">
           
          </div>
          <div className="col-lg-4">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
