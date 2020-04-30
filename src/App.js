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

//connect allows our component to have access to things related to redux


class App extends Component {


    unsubscribeFromAuth = null;

    componentDidMount() {

        //because this is an open subscription we wanna close the subscription
        /*    auth.onAuthStateChanged(user => {
                this.setState({currentUser: user});
                //console.log(user)
            })*/

        //destructure setCurrentUser from props
        const {setCurrentUser} = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            //if user authentication exists
            if (userAuth) {
                //create the user
                const userRef = await createUserProfileDocument(userAuth);
                //get the user data for the for the frontEnd
                userRef.onSnapshot(snapShot => {
                    //here we call our setCurrentUser function from userAction and set the value
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }

            setCurrentUser(userAuth);
        });
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
    currentUser: selectCurrentUser
});

//this sets the current user by calling user sections and setting user as User which userActions uses it as the payload

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);