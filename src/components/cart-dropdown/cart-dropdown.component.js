import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from "../customer-button/custom-btn";
import {connect} from 'react-redux'
import CartItem from "../cart-item/cart-item-component";
import {selectCartItems} from '../../redux/cart/cart.selector'

const CartDropdownComponent = ({cartItems}) =>
    (
        <div className="cart-dropdown">
            <div className="cart-items">
                {/*get all the cart item and map them into CartItem*/}
                {
                    cartItems.map(cartItem => (<CartItem item={cartItem} key={cartItem.id}/>))
                }
            </div>
            <CustomButton>
                CHECKOUT
            </CustomButton>


        </div>
    );

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropdownComponent);