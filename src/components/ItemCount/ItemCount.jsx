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
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '1rem' }}>
    <button onClick={decrease} disabled={count === 1}>-</button>
    <span>{count}</span>
    <button onClick={increase} disabled={count === stock}>+</button>
    <button onClick={handleAddToCart} disabled={stock === 0}>
        Agregar al carrito
    </button>
    </div>
);
};

export default ItemCount;
