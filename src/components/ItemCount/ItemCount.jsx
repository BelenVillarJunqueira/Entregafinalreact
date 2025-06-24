import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

const increase = () => {
    if (count < stock) setCount(count + 1);
};

const decrease = () => {
    if (count > 1) setCount(count - 1);
};

const handleAddToCart = () => {
    if (stock > 0) {
    onAdd(count);
    }
};

return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '1rem' }}>
    {stock > 0 ? (
        <>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button onClick={decrease} disabled={count === 1}>-</button>
            <span>{count}</span>
            <button onClick={increase} disabled={count === stock}>+</button>
        </div>
        <button onClick={handleAddToCart} disabled={stock === 0}>
            Agregar al carrito
        </button>
        </>
    ) : (
        <p style={{ color: 'red' }}>Sin stock disponible</p>
    )}
    </div>
);
};

export default ItemCount;

