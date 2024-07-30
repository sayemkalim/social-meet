import React from 'react'
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home';

const App = () => {
  return (
<Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />

    </Routes>  )
}

export default App