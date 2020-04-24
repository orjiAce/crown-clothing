import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//action for adding items to cart
export const addItemsCart = item => ({
    type: CartActionTypes.ADD_ITEM,
    //the payload holds the items we are adding to our cart Items
    payload: item
});