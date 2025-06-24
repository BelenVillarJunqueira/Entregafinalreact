import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../components/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
const { itemId } = useParams();

useEffect(() => {
    const fetchProduct = async () => {
    const db = getFirestore();
    const docRef = doc(db, 'Productos', itemId);

    try {
        setLoading(true);
        setError(null);

        const snapshot = await getDoc(docRef);

        if (!snapshot.exists()) {
        throw new Error("Producto no encontrado");
        }

        setProduct({ id: snapshot.id, ...snapshot.data() });
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
