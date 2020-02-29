import * as React from 'react';
import './custom-button.styles.scss';

export const CustomBtn = ({children, isGoogleSignIn, ...otherProps}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-signIn' : ''} custom-button `}{...otherProps}>
            {children}
        </button>
    );
};