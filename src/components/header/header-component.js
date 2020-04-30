import * as React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg';
import '../header/header.styles.scss';
import {auth} from "../../firebase/firebase.uitils";
import CartIcon from "../cart-icon-component/cart-icon";
import {connect} from 'react-redux';
import CartDropdownComponent from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selector";
import {selectCurrentUser} from "../../redux/user/user.selector";

const HeaderComponent = ({currentUser, hidden}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
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
                    </div> : (<Link className="option" to='/signin'> Sign In</Link>)
                }
                <CartIcon/>
                {
                    hidden ? null : <CartDropdownComponent/>
                }

            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(HeaderComponent)