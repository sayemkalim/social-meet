import React from 'react'
import { Route, Routes } from "react-router-dom";
import Register from './pages/Register'
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
<Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />

    </Routes>  )
}

export default App