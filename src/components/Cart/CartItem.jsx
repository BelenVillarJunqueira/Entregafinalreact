import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartItem = ({ item }) => {
const { removeItem } = useContext(CartContext);

return (
    <div
    style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        borderBottom: "1px solid #ddd",
    }}
    >
    <div>
        <h4 style={{ margin: "0 0 0.5rem 0" }}>{item.nombre}</h4>
        <p style={{ margin: 0 }}>Cantidad: {item.qty}</p>
        <p style={{ margin: 0 }}>Subtotal: ${item.qty * item.precio}</p>
    </div>

    <button
        onClick={() => removeItem(item.id)}
        style={{
        background: "#e74c3c",
        color: "#fff",
        border: "none",
        padding: "0.5rem 1rem",
        borderRadius: "5px",
        cursor: "pointer",
        }}
    >
        Eliminar
    </button>
    </div>
);
};

export default CartItem;
