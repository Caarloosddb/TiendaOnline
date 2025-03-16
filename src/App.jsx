import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/LoginComponent";
import Home from "./components/Home";
import Catalogo from "./components/Catalogo";
import Contacto from "./components/Contacto";
import DetalleProducto from "./components/DetalleProducto"; 
import productosCatalogo from "./data/productosCatalogo.jsx"; 
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/producto/:id"element={<DetalleProducto productos={productosCatalogo} />} />
                
      </Routes> 
    </Router>
  );
}

export default App;
