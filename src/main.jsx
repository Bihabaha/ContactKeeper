import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { ContactContextProvider } from "./context/ContactContext.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ThemeProvider } from "./context/ThemeContex.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <ContactContextProvider>
          
            <App />
          </ContactContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
