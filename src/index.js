import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";

//the provider fro react-redux gives our app access to the store
import {Provider} from 'react-redux'
import {store, persistor} from "./redux/store";

ReactDOM.render(
    //wrap the provide around our application because we want everything inside to have access to the store object inside our application
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));
