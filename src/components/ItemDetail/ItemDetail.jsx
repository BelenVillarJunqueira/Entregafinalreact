import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';

const ItemDetail = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [added, setAdded] = useState(false);

const handleAdd = (qty) => {
    addToCart(product, qty);
    setAdded(true);
};

return (
    <div className="item-detail" style={{ padding: '2rem', textAlign: 'center' }}>
    <img src={product.imagen} alt={product.nombre} style={{ maxWidth: '300px', borderRadius: '10px' }} />
    <h2>{product.nombre}</h2>
    <p>{product.descripcion}</p>
    <p><strong>Precio:</strong> ${product.precio}</p>

    {!added ? (
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
    ) : (
        <div>
        <p style={{ color: 'green' }}>✅ Producto agregado al carrito</p>
        <Link to="/cart"><button>Ir al carrito</button></Link>
        </div>
    )}
    </div>
);
};

export default ItemDetail;
