import React, { useContext } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/features/themeSlice";


function Navbar() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    console.log(path);
    navigate(path);
  };
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.cart.cartItems)
  const quantity = cartItems.reduce((acc,item, index,arr)=>{
    return acc+item.quantity;
  },0);
  return (
    <div className="nav">
      <div onClick={() => handleClick("/")}>Home</div>
      <div onClick={() => handleClick("/products")}>Products</div>
      <div onClick={() => handleClick("/cart")}>Cart</div>
      <button onClick={()=>dispatch(toggleTheme())}>SwitchTheme</button>
      <div>Cart Count: {quantity}</div>
    </div>
  );
}

export default Navbar;
