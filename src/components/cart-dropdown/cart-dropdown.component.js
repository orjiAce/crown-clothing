import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from "../customer-button/custom-btn";

const CartDropdownComponent = () =>
    (
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>
                    CHECKOUT
                </CustomButton>

            </div>

        </div>
    );

export default CartDropdownComponent;