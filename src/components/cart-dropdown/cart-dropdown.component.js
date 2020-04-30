import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from "../customer-button/custom-btn";
import {connect} from 'react-redux'
import CartItem from "../cart-item/cart-item-component";
import {withRouter} from 'react-router-dom'
import {selectCartItems} from '../../redux/cart/cart.selector'
import {toggleCartHidden} from "../../redux/cart/cart.action";

const CartDropdownComponent = ({cartItems, history, dispatch}) =>
    (
        <div className="cart-dropdown">
            <div className="cart-items">
                {/*get all the cart item and map them into CartItem*/}
                {
                    cartItems.length ?
                        cartItems.map(cartItem => (<CartItem item={cartItem} key={cartItem.id}/>))
                        : <span className="empty-message">Your cart is empty.</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>
                CHECKOUT
            </CustomButton>


        </div>
    );

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});
//we use withRouter so the "checkout page" will have access t0 the props we need
export default withRouter(connect(mapStateToProps)(CartDropdownComponent));