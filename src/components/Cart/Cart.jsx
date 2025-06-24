import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
const { cart, clearCart, getTotalPrice } = useContext(CartContext);

if (cart.length === 0)
    return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>🛒 El carrito está vacío</h2>
        <Link to="/">
        <button style={{ marginTop: "1rem" }}>Ir al catálogo</button>
        </Link>
    </div>
    );

return (
    <div style={{ maxWidth: 800, margin: "2rem auto" }}>
    <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>🛍️ Carrito de compras</h2>

    {cart.map((item) => (
        <CartItem key={item.id} item={item} />
    ))}

    <div style={{ textAlign: "right", marginTop: "1rem" }}>
        <h3>Total: ${getTotalPrice()}</h3>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", marginTop: "1rem" }}>
        <button
            onClick={clearCart}
            style={{
            background: "#e74c3c",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            cursor: "pointer",
            }}
        >
            Vaciar carrito
        </button>

        <Link to="/checkout">
            <button
            style={{
                background: "#27ae60",
                color: "#fff",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
                cursor: "pointer",
            }}
            >
            Finalizar compra
            </button>
        </Link>
        </div>
    </div>
    </div>
);
};

export default Cart;
