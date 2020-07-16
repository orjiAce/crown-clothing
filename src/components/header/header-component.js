import * as React from 'react';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import '../header/header.styles.scss';
import {auth} from "../../firebase/firebase.uitils";
import CartIcon from "../cart-icon-component/cart-icon";
import {connect} from 'react-redux';
import CartDropdownComponent from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selector";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {logoContainer, HeaderContainer, OptionContainer, OptionLink} from './header.styles'

const HeaderComponent = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <logoContainer to="/">
                <Logo/>
            </logoContainer>

            <OptionContainer>
                <OptionLink to="shop" className="option">
                    Shop
                </OptionLink>
                <OptionLink to="shop">
                    Contact
                </OptionLink>
                {
                    currentUser ? <OptionLink as="div" onClick={() => auth.signOut()}>
                        Logout
                    </OptionLink> : (<OptionLink to='/signin'> Sign In</OptionLink>)
                }
                <CartIcon/>
                {
                    hidden ? null : <CartDropdownComponent/>
                }

            </OptionContainer>
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(HeaderComponent)