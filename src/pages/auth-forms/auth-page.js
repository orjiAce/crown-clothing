import * as React from 'react';

import './auth.scss';
import SignIn from "../../components/signIn/SignIn";

const AuthPage = () => {
    return (
        <div className="sign-and-sign-up">
            <SignIn/>
        </div>
    );
};
export default AuthPage;