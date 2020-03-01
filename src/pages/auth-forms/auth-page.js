import * as React from 'react';

import './auth.scss';
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/sign-up/signUp";

const AuthPage = () => {
    return (
        <div className="sign-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
    );
};
export default AuthPage;