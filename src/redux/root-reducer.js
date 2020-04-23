//here this reducer is the base object that represent all of the state of our application
//combines all of our states together
//use 'combineReducer' to combine all the reducers together

import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});

