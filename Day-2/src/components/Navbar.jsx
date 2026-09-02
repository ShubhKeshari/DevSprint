import React from 'react'
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const handleClick = (path) => {
        console.log(path);
        navigate(path);
    }
  return (
    <div className='nav'>
      <div onClick={() => handleClick("/")}>Home</div>
      <div onClick={() => handleClick("/about")}>About</div>
      <div onClick={() => handleClick("/products")}>Products</div>
    </div>
  )
}

export default Navbar
