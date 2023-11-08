import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route,Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { useAuthContext } from "./hooks/useAuthContext";
import Page from "./Components/Page/Page";
import Contacts from "./Components/Contacts/Contacts";


const App = () => {
  const {user}=useAuthContext()
  return (
    <div
      className="
"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={user?<Home />:<Navigate to="/page"/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contacts" element={user?<Contacts />:<Navigate to=""/>}/>
        
        <Route path="/login" element={!user?<Login />:< Navigate to="/page" />}/>
        <Route path="/signup" element={!user?<Register />:<Navigate to="/page"/>}/>
        <Route path="/page" element={<Page/>}/>
       
       
      </Routes>
    </div>
  );
};

export default App;
