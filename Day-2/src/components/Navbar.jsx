import React, { useContext } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {cart} = useContext(CartContext);
  const handleClick = (path) => {
    console.log(path);
    navigate(path);
  };
  const quantity = cart.reduce((acc,item, index,arr)=>{
    return acc+item.quantity;
  },0);
  return (
    <div className="nav">
      <div onClick={() => handleClick("/")}>Home</div>
      <div onClick={() => handleClick("/products")}>Products</div>
      <div onClick={() => handleClick("/cart")}>Cart</div>
      <button onClick={toggleTheme}>SwitchTheme</button>
      <div>Cart Count: {quantity}</div>
    </div>
  );
}

export default Navbar;
