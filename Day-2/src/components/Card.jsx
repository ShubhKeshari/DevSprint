import React from "react";

function Card({ title, description, onAddToCart }) {
  

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>

      <button onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Card;