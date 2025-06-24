import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../Data/products';
import ItemList from '../components/ItemList/ItemList';

const ItemListContainer = () => {
const [items, setItems] = useState([]);
const { categoryId } = useParams();

useEffect(() => {
const fetchData = async () => {
    const data = await getProductsFromFirestore();
    setItems(data);
};

fetchData();
}, [categoryId]);

return (
    <div>
    <h1 style={{ textAlign: 'center' }}>
        {categoryId ? `Categoría: ${categoryId}` : 'Catálogo completo'}
    </h1>
    <ItemList items={items} />
    </div>
);
};

export default ItemListContainer;
