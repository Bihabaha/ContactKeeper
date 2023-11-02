import React, { useEffect} from "react";
import { useContactContext } from "../../hooks/useContactContext";
import {useAuthContext} from "../../hooks/useAuthContext"
import Form from "../Form/Form";
import Contacts from "../Contacts/Contacts";

const Home = () => {
  const {contacts,dispatch}= useContactContext()
  const{user}=useAuthContext()

  useEffect(() => {
    const fetchContact = async () => {
      const response = await fetch("/api/contacts",{
        // sen authorization to gie access to end point
        header:{
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();
      if (response.ok) {
       dispatch({type:"SET_CONTACTS",payload:json})
      }
      //if user logs in then he can fetch contacts
      if(user){

        fetchContact();
      }
    };
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
            {" "}
            {contacts && contacts.map(
              (contact)=>(
                <Contacts contact={contact} key={contact._id} />
              )
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
