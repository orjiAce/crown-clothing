import React, {Component} from 'react';
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


class App extends Component {


    unsubscribeFromAuth = null;

    componentDidMount() {

        const {checkUserSession} = this.props;
        checkUserSession();
    }

    //THIS WILL CLOSE THE SUBSCRIPTION
    componentWillUnmount() {

        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <HeaderComponent/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route exact path='/checkout' component={Checkout}/>
                    {/*here we user render to determine what component to render when a particular condition is met*/}
                    <Route
                        exact
                        path='/signin'
                        render={() =>
                            this.props.currentUser ? (
                                <Redirect to='/'/>
                            ) : (
                                <AuthPage/>
                            )
                        }
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,

});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})
//this sets the current user by calling user sections and setting user as User which userActions uses it as the payload

export default connect(
    mapStateToProps, mapDispatchToProps
)(App);