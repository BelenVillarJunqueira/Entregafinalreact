import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../Data/products';
import ItemList from '../components/ItemList/ItemList';

const ItemListContainer = () => {
const [items, setItems] = useState([]);
const { categoryId } = useParams();

useEffect(() => {
const asyncFunction = async () => {
    try {
    const data = categoryId
        ? await getProductsByCategory(categoryId)
        : await getProducts();
    setItems(data);
    } catch (error) {
    console.error("Error cargando productos:", error);
    }
};

asyncFunction();
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
