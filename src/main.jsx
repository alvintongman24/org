
import './index.css'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Register from './components/Register.jsx';

createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="register" element={<Register />} />
  </Routes>
</BrowserRouter>
 
)
