import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { ContactContextProvider } from './Components/context/ContactContext.jsx'
ContactContextProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
<ContactContextProvider> <App /></ContactContextProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
