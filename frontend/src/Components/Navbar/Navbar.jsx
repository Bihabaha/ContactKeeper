import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useTheme } from "../../hooks/UseContextHook";

useAuthContext;
useLogout;
useLogout;
const Navbar = () => {
  const {color}=useTheme()
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg "  style={{background:color}}>
        <div className="container-fluid">
          <Link className="navbar-brand  text-light" to="/">
            <img className="mx-5  "  src="/public/pictures/logo.png" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  m-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="/about">
                  About
                </Link>
              </li>
              {user && (
                <div className="mt-2">
                  <Link
                    to="/"
                    className="btn  btn-sm m-auto btn-outline-success me-2"
                  >
                    Add contact
                  </Link>
                </div>
              )}
              {user && (
                <div className="mt-2" onClick={handleClick}>
                  <span className="text-light  ">{user.email}</span>{" "}
                  <span className="btn btn-sm m-auto btn-outline-danger">
                    Logout
                  </span>
                </div>
              )}
              {!user && (
                <>
                  {" "}
                  <li className="nav-item ">
                    <Link className="nav-link " aria-current="page" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item  ">
                    <Link
                      className="nav-link "
                      aria-current="page"
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
