import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import MyNavbar from './pages/home/componats/navbar'
import Myheader from './pages/home/header'
import Footerpage from './pages/home/componats/footer/index.tsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <MyNavbar/>
    <App />
    <Footerpage/>
    </BrowserRouter>
  </React.StrictMode>,
)
