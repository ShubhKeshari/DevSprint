import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/Profile")
  }
  return (
    <>
      <div>This is Home Page</div>
      <button onClick={handleClick}>Profile Navigate</button>
    </>
  );
}

export default Home;
