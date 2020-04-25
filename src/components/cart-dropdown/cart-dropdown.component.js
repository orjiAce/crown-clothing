import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from "../customer-button/custom-btn";
import {connect} from 'react-redux'
import CartItem from "../cart-item/cart-item-component";

const CartDropdownComponent = ({cartItems}) =>
    (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => (<CartItem item={cartItem} key={cartItem.id}/>))
                }
            </div>
            <CustomButton>
                CHECKOUT
            </CustomButton>


        </div>
    );

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});
export default connect(mapStateToProps)(CartDropdownComponent);