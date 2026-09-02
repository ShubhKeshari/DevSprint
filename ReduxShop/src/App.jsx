import { useContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  const theme = useSelector((state)=>state.theme.bgtheme);
  return (
    <>
      <Navbar />
      <div className={`${theme}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
