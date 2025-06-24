import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
return (
    <div className="cart-widget" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
    <FaShoppingCart size={24} />
    <span></span>
    </div>
);
};

export default CartWidget;
.