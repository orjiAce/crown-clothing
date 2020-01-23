import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage";
import HatsPage from "./pages/Hats/HatsPage";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/hats' component={HatsPage}/>
        </Switch>
    </div>
  );
}

export default App;
