import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const saved = localStorage.getItem("cart");
  const initialCart = saved ? JSON.parse(saved) : [];
  const [cart, setCart] = useState(initialCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    setCart((prev) => [...prev, item]);
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }
  const isInCart = (courseId) => {
    return cart.some((item) => item.id === courseId);
  };
  const value = {
    cartItems: cart,
    addToCart,
    removeFromCart,
    clearCart,
    isInCart,
    totalItems: cart.length,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export const useCart = () => useContext(CartContext);
