import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {
return (
    <div className="item-detail" style={{ padding: '2rem', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '500px', margin: '2rem auto', textAlign: 'center' }}>
    {product.imagen && (
        <img 
        src={product.imagen} 
        alt={product.nombre} 
        style={{ width: '100%', height: 'auto', borderRadius: '10px' }} 
        />
    )}
    <h2>{product.nombre}</h2>
    <p>{product.descripcion}</p>
    <p><strong>Precio:</strong> ${product.precio}</p>
    <ItemCount stock={10} initial={1} />
    </div>
);
};

const handleAdd = (cantidad) => {
console.log(`Se agregaron ${cantidad} productos al carrito`);
};

<ItemCount stock={10} initial={1} onAdd={handleAdd} />

export default ItemDetail;
