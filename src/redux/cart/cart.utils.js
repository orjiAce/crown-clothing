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