import React, {Component} from 'react';
import {CustomBtn} from "../customer-button/custom-btn";
import FormInput from "../form-input/form-input";
import {auth, createUserProfileDocument} from "../../firebase/firebase.uitils";

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmedPassword: '',
        }
    }

    //this will be an async function
    onSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmedPassword} = this.state;
        //check if password match with confirm password
        if (password !== confirmedPassword) {
            alert("Password don't match");
            return;
        }
//if the above logic checks out go and ahead and create user with email and password
        try {
            const {user} = auth.createUserWithEmailAndPassword(email, password);

            //if successful
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmedPassword: '',
            })
        } catch (e) {
            console.log("Error: ", e);
        }
        console.log(displayName, email)
    };

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    };

    render() {
        //destructure form input values from our state
        const {displayName, email, password, confirmedPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">
                    I do not have an account
                </h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.onSubmit}>
                    <FormInput
                        type="text"
                        value={displayName}
                        name='displayName'
                        label="display name"
                        onChange={this.handleChange}
                        required
                    >
                    </FormInput>


                    <FormInput
                        type="email"
                        value={email}
                        name="email"
                        label="Email"
                        onChange={this.handleChange}
                        required={true}
                    >
                    </FormInput>
                    <FormInput
                        type="password"
                        value={password}
                        name='password'
                        label="Password"
                        onChange={this.handleChange}
                        required>
                    </FormInput>

                    <FormInput
                        type="password"
                        value={confirmedPassword}
                        name='confirmedPassword'
                        label="Confirmed Password"
                        onChange={this.handleChange}
                        required>
                    </FormInput>
                    <CustomBtn type="submit"> SIGN UP</CustomBtn>
                </form>

            </div>
        );
    }
}

export default SignUp;