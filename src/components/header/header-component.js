import * as React from 'react';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import '../header/header.styles.scss';
import CartIcon from "../cart-icon-component/cart-icon";
import {connect} from 'react-redux';
import CartDropdownComponent from "../cart-dropdown/cart-dropdown.component";
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selector";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {logoContainer, HeaderContainer, OptionContainer, OptionLink} from './header.styles'
import {signOutStart} from "../../redux/user/userActions";

const HeaderComponent = ({currentUser, hidden, signOutStart}) => {
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
                    currentUser ? <OptionLink as="div" onClick={signOutStart}>
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
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)