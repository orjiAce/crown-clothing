import React from 'react';
import './cart-item.styles.scss';
//item that holds users products on the cart
const CartItem = ({item: {price, id, imageUrl, name, quantity}}) => {
    return (
        <div className="cart-item">
            <img alt="item" src={imageUrl}/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">$ {quantity} x {price}</span>

            </div>
        </div>
    );
};

export default CartItem;