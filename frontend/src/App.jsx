import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route,Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const {user}=useAuthContext()
  return (
    <div
      className="
"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={user?<Home />:<Navigate to="/login"/>}/>
        <Route path="/about" element={<About />}/>

        <Route path="/login" element={!user?<Login />:< Navigate to="/" />}/>
        <Route path="/signup" element={!user?<Register />:<Navigate to="/"/>}/>
       
      </Routes>
    </div>
  );
};

export default App;
