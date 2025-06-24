import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { db } from "../../Firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
const { cart, clearCart, getTotalPrice } = useContext(CartContext);
const [client, setClient] = useState({ name: "", email: "", phone: "" });
const [orderId, setOrderId] = useState(null);
const [error, setError] = useState(null);
const navigate = useNavigate();

const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
    buyer: client,
    items: cart,
    total: getTotalPrice(),
    date: Timestamp.fromDate(new Date()),
    };

    try {
    const col = collection(db, "orders");
    const docRef = await addDoc(col, order);
    setOrderId(docRef.id);
    clearCart();
    } catch (err) {
    console.error("Error al crear la orden", err);
    setError("Ocurrió un error al procesar tu compra.");
    }
};

if (orderId) {
    return (
    <div style={{ textAlign: "center", margin: "2rem auto" }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu ID de orden es <strong>{orderId}</strong></p>
        <button onClick={() => navigate("/")}>Seguir comprando</button>
    </div>
    );
}

return (
    <form
    onSubmit={handleSubmit}
    style={{
        maxWidth: 500,
        margin: "2rem auto",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    }}
    >
    <h2>Checkout</h2>
    {error && <p style={{ color: "red" }}>{error}</p>}
    <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={client.name}
        onChange={handleChange}
        required
    />
    <input
        type="email"
        name="email"
        placeholder="Email"
        value={client.email}
        onChange={handleChange}
        required
    />
    <input
        type="tel"
        name="phone"
        placeholder="Teléfono"
        value={client.phone}
        onChange={handleChange}
        required
    />
    <button type="submit" disabled={cart.length === 0}>
        Confirmar compra
    </button>
    </form>
);
};

export default CheckoutForm;
