import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../Data/products';
import ItemDetail from '../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const { itemId } = useParams();

useEffect(() => {
    const fetchProduct = async () => {
    try {
        setLoading(true);
        setError(null);
        const data = await getProductById(itemId);
        if (!data) {
        throw new Error("Producto no encontrado");
        }
        setProduct(data);
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
    };

    fetchProduct();
}, [itemId]);

if (loading) return <p style={{ textAlign: 'center' }}>Cargando producto...</p>;
if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;

return (
    <div>
    <ItemDetail product={product} />
    </div>
);
};

export default ItemDetailContainer;
