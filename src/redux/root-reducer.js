//here this reducer is the base object that represent all of the state of our application
//combines all of our states together
//use 'combineReducer' to combine all the reducers together

import {combineReducers} from 'redux';
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer';
import shopReducer from "./shop/shop.reducer";
//the configuration object that we want redux persist to use

const persistConfig = {
    //the key means at what point in our reduce object do we wanna start soring everything
    key: 'root',
    storage,
    //whitelist is an object that contains any of the reducer name we wanna store or persist
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});
export default persistReducer(persistConfig, rootReducer)
