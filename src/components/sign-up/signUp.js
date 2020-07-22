import React, {useState} from 'react';
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input';
import CustomButton from '../customer-button/custom-btn';

import {signUpStart} from "../../redux/user/userActions";
import './sign-up.styles.scss';


const SignUp = ({signUpStart}) => {
    const [credentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();

        /*const {displayName, email, password, confirmPassword} = this.state;*/

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        signUpStart({displayName, email, password})
    };

    const handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value});
        setCredentials({...credentials, [name]: value})
    };


    const {displayName, email, password, confirmPassword} = credentials;
    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );

}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)
