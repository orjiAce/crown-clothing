import CartActionTypes from './cart.types'
import {addItemToCart} from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    //store cart items im this array
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        //add item to the array whenever the user clicks
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                //first spread i  the existing cart items (state.cartItems) the add the new new cart items
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        default:
            return state;
    }
};
export default cartReducer;