import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const productData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
const newProduct = {
    "title": "Shubham",
    "price": 109,
    "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_t.png",
    "rating": {
        "rate": 4.8,
        "count": 319
    }
}
  const addProduct = async ()=>{
    try{
      const res = await fetch("https://fakestoreapi.com/products",{
        method: "POST",
        headers:{
          'Content-Type':"application/json",
          //Authorization: `Bearer ${token}`
        },
        body:JSON.stringify(newProduct)
      });
      const data = await res.json();
      console.log(data);

    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    productData();
  }, []);
  
  useEffect(() => {
    addProduct();
  }, []);
// Console products whenever products state changes
  useEffect(() => {
    console.log(products);
  }, [products]);


  return (
    <>
      <div>Data Fetching</div>
      <div>
        {/* {products.map((item)=>{

        })} */}
      </div>
    </>
  );
}

export default App;
