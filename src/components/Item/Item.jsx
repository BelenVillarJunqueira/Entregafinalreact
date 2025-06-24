import { Link } from 'react-router-dom';

const Item = ({ item }) => {
return (
    <div className="item-card" style={{
    border: '1px solid #ddd',
    padding: '1rem',
    borderRadius: '10px',
    textAlign: 'center',
    maxWidth: '250px'
    }}>
    <h3>{item.nombre}</h3>
    <img src={item.imagen} alt={item.nombre} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
    <p><strong>${item.precio}</strong></p>
    <Link to={`/item/${item.id}`}>
        <button style={{ marginTop: '10px' }}>Ver detalle</button>
    </Link>
    </div>
);
};

export default Item;
