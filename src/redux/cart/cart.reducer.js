import CartActionTypes from './cart.types'
import {addItemToCart, removeItemFromCart} from "./cart.utils";
import {removeItem} from "./cart.action";

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
                //first get the existing cart items (state.cartItems) then add the new new cart items
                cartItems: addItemToCart(state.cartItems, action.payload)
            };

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                //we write a utility function that removes the cart item and returns us the result
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                //check if cart item supplied matches the cartItem to be removed
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        default:
            return state;
    }
};
export default cartReducer;