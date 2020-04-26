import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({children, inverted, isGoogleSignIn, ...otherProps}) => (
    <button
        className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'isGoogleSignIn' : ''}custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;