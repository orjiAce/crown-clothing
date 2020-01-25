import * as React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg';
import '../header/header.styles.scss';

const HeaderComponent = () => {
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
            </div>
        </div>
    );
};
export default HeaderComponent