import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { ContactContextProvider } from './Components/context/ContactContext.jsx'

import { AuthContextProvider } from './Components/context/AuthContext.js'
ContactContextProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
<AuthContextProvider><ContactContextProvider> <App /></ContactContextProvider></AuthContextProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
