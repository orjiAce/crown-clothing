import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import FormInput from '../form-input/form-input';
import CustomButton from '../customer-button/custom-btn';


import './SignIn.scss';

import {googleSignInStart, emailSignInStart} from "../../redux/user/userActions";

const SignIn = ({emailSignInStart, googleSignInStart}) => {

    const [userCredentials, setCredentials] = useState({email: '', password: ''})

    const handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = userCredentials
        emailSignInStart(email, password)

    };

    const handleChange = event => {
        const {value, name} = event.target;
//similar to handle change setState in class component
        setCredentials({...userCredentials, [name]: value})
    };

    const {email, password} = userCredentials

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    handleChange={handleChange}
                    value={email}
                    label='email'
                    required
                />
                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    handleChange={handleChange}
                    label='password'
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'> Sign in </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
                </form>
            </div>
        );

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);