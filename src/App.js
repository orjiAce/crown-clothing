import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage";

import ShopPage from "./pages/shop/ShopPage";
import HeaderComponent from "./components/header/header-component";

function App() {
  return (
    <div className="App">
        <HeaderComponent/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/shop' component={ShopPage}/>
        </Switch>
    </div>
  );
}

export default App;
