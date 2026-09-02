import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    console.log("add to cart called");

    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);

      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };
  const removeToCart = (product) => {
  setCart((prev) => {
    return prev
      .map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);
  });
};
  const deleteCart = (product) => {
  console.log("delete cart called");

  setCart((prev) => {
    return prev.filter((item) => item.id !== product.id);
  });
};

  return (
    <CartContext.Provider value={{ addToCart, removeToCart, deleteCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};
