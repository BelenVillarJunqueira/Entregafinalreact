import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from '../ItemDetail/ItemDetail';

const Item = ({ item }) => {
return (
    <div className="item-card" >
    <h3>{item.name}</h3>
    <img src={item.imagen} alt={item.nombre} />
    <Link to={`/item/${item.id}`}>Ver detalle</Link>
    
    </div>
);
};

export default Item;
