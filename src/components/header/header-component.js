import * as React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg';
import '../header/header.styles.scss';
import {auth} from "../../firebase/firebase.uitils";
import {connect} from 'react-redux';

const HeaderComponent = ({currentUser}) => {
    return (
        <div className="header">
            <Link classname="logo-container" to="/">
                <Logo/>
            </Link>

            <div className="options">
                <Link to="shop" className="option">
                    Shop
                </Link>
                <Link to="shop" className="option">
                    Contact
                </Link>
                {
                    currentUser ? <div className="option" onClick={() => auth.signOut()}>
                        Logout
                    </div> : <Link className="option" to='/signin'> Sign In</Link>
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(HeaderComponent)