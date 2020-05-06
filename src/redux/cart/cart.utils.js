//add any utility functions related to our cat redux code

//this will take two arguments first the existing cart items then the item we want to add
export const addItemToCart = (cartItems, cartItemToAdd) => {

    //this checks for existing cart items in the cartItems array
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
            }
            : cartItem
        )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]

};

//first check if cart item exist and if the quantity is 1
export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    //this checks if the cartItem exists in the cartItem
    const existingCartItem = cartItems.find(
        cartItems => cartItems.id === cartItemToRemove.id
    );

    //check if the cartItem quantity is equal to 1
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItems => cartItems.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? {
            ...cartItem,
            quantity: cartItem.quantity - 1
        }
        : cartItem);

};