import * as React from 'react';
import './SignIn.scss';
import FormInput from "../form-input/form-input";
import {CustomBtn} from "../customer-button/custom-btn";
import {auth, signInWithGoogle} from "../../firebase/firebase.uitils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            //sign in user
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                "password": '',
                "email": '',
            })
        } catch (e) {
            console.log(e)
        }

    };


    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    };

    render() {
        return (
            <div className="signIn">
                <h2>Already have an account?</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.handleChange} label="email" name="email" value={this.state.email}
                               type="email" required={true}/>


                    <FormInput handleChange={this.handleChange} label="password" name="password"
                               value={this.state.password} type="password" required={true}/>
                    <div className="buttons">

                        <CustomBtn type="submit">Sign In </CustomBtn>
                        {/*check if its a google sign in button*/}
                        <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomBtn>
                    </div>
                </form>
            </div>
        );
    };
}

export default SignIn;
