import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart((prev) => {
      return [...prev, product];
    });
  };
  const removeToCart = (id) => {
    setCart((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };
  const deleteCart = () => {
    setCart([]);
  };

  return (<CartContext.Provider value={{addToCart,removeToCart,deleteCart}}>{children}</CartContext.Provider>);
};
