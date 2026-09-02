import React from "react";
import Card from "../components/Card";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Product() {
  const products = [
  {
    id: 1,
    title: "Laptop",
    description: "High performance laptop",
    price: 50000,
  },
  {
    id: 2,
    title: "Mobile",
    description: "Latest smartphone",
    price: 25000,
  },
  {
    id: 3,
    title: "Headphones",
    description: "Wireless headphones",
    price: 3000,
  },
  {
    id: 4,
    title: "Keyboard",
    description: "Mechanical keyboard",
    price: 2500,
  },
  {
    id: 5,
    title: "Mouse",
    description: "Wireless optical mouse",
    price: 1200,
  },
];

const {addToCart} = useContext(CartContext);

 return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          description={product.description}
          onAddToCart={() => addToCart(product)}
        />
      ))}
    </div>
  );
}

export default Product;