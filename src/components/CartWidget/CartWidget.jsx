import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
const { getItemQty } = useContext(CartContext);
const totalItems = getItemQty();

return (
    <Link to="/cart" style={{ display: 'flex', alignItems: 'center', gap: '5px', textDecoration: 'none', color: 'inherit' }}>
    <FaShoppingCart size={24} />
    {totalItems > 0 && (
        <span style={{ fontWeight: 'bold', color: '#333' }}>{totalItems}</span>
    )}
    </Link>
);
};

export default CartWidget;
