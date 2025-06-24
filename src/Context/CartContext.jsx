import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

const addToCart = (item, qty) => {
    const exists = cart.find(p => p.id === item.id);
    if (exists) {
    setCart(cart.map(p =>
        p.id === item.id ? { ...p, qty: p.qty + qty } : p
    ));
    } else {
    setCart([...cart, { ...item, qty }]);
    }
};

const removeItem = (id) => {
    setCart(cart.filter(p => p.id !== id));
};

const clearCart = () => setCart([]);

const getItemQty = () => cart.reduce((sum, p) => sum + p.qty, 0);
  const getTotalPrice = () => cart.reduce((sum, p) => sum + p.qty * p.precio, 0);

return (
    <CartContext.Provider value={{ cart, addToCart, removeItem, clearCart, getItemQty, getTotalPrice }}>
    {children}
    </CartContext.Provider>
);
};
