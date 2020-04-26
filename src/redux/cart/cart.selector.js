import {createSelector} from "reselect";
//reselect uses memoization to help us cache data so that our component don;'t get re-rendered each time a state changes


//let's start with the input selector
//this function takes a whole state a returns a slice of it

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);
