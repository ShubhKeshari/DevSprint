import React, { useContext } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const handleClick = (path) => {
    console.log(path);
    navigate(path);
  };
  return (
    <div className="nav">
      <div onClick={() => handleClick("/")}>Home</div>
      <div onClick={() => handleClick("/about")}>About</div>
      <div onClick={() => handleClick("/products")}>Products</div>
      <button onClick={toggleTheme}>SwitchTheme</button>
    </div>
  );
}

export default Navbar;
