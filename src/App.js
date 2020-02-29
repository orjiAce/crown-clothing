import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./pages/homepage/homepage";
import SignIn from './pages/auth-forms/auth-page'
import ShopPage from "./pages/shop/ShopPage";
import HeaderComponent from "./components/header/header-component";
import {auth} from "./firebase/firebase.uitils";


class App extends Component {

    unsubscribeFromAuth = null;

    //here we are going store our user state so we can use it throughout our application
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    componentDidMount() {
        //because this is an open subscription we wanna close the subscription
        auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
            console.log(user)
        })

    }

    //THIS WILL CLOSE THE SUBSCRIPTION
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div className="App">
                <HeaderComponent currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/shop' component={ShopPage}/>
                    <Route exact path='/SignIn' component={SignIn}/>
                </Switch>
            </div>
        );
    }
}


export default App;
