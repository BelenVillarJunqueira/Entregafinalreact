import Item from '../Item/Item';
import ItemListContainer from '../../Containers/ItemListContainer';''; 
import './mystyle.css';


const ItemList = ({ items }) => {
return (
    <div className ="item-list" >
    {items.map(item => (
        <Item key={item.id} item={item} />
    ))}
    </div>
);
};

export default ItemList;
