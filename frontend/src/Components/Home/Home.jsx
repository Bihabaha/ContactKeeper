import React, { useEffect} from "react";
import { useContactContext } from "../../hooks/useContactContext";

import Form from "../Form/Form";
import Contacts from "../Contacts/Contacts";
import { useAuthContext } from "../../hooks/useAuthContext";
import Search from "../Search/Search";


const Home = () => {
  const {contacts,dispatch,searched}= useContactContext()
  const{user}=useAuthContext()
  const fetchContact = async () => {
      
    const response = await fetch("/api/contacts",{
      // sen authorization to gie access to end point
      method: "GET",
      headers:{
        'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();
   
    if (response.ok) {
     dispatch({type:"SET_CONTACTS",payload:json})
    }
  }
  useEffect(() => {
    
      //if user logs in then he can fetch contacts
      if(user){
        console.log(contacts)

        fetchContact();
      }
    
  }, [dispatch,user]);
  
  return (
    <div>
      <div className="contacts mt-5">
        <h1 className="text-center">Add a New Contacts</h1>
      </div>
      <div className=" mt-5">
        <div className="row">
          <div className="col-lg-6">
            <Form />
          </div> 

          <div className="col-lg-6">
            <Search/>
      
            {searched && searched.length !== 0
							? searched.map((contact) => (
									<Contacts contact={contact} key={contact._id} />
							  ))
							: contacts &&
							  contacts.map((contact) => (
									<Contacts contact={contact} key={contact._id} />
							  ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
