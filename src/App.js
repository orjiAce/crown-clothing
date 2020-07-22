import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import AuthPage from "./pages/auth-forms/auth-page";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/ShopPage";
import HeaderComponent from "./components/header/header-component";
import {auth, createUserProfileDocument} from "./firebase/firebase.uitils";
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/userActions'
import {selectCurrentUser} from "./redux/user/user.selector";
import {createStructuredSelector} from "reselect";
import Checkout from "./components/checkout/checkout";

import {checkUserSession} from "./redux/user/userActions";

//connect allows our component to have access to things related to redux

const App = ({checkUserSession, currentUser}) => {
    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <HeaderComponent/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path='/checkout' component={Checkout}/>
                <Route
                    exact
                    path='/signin'
                    render={() =>
                        currentUser ? <Redirect to='/'/> : <AuthPage/>
                    }
                />
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);