import React from 'react'
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.commponent'
import CustomButton from '../custom-button/custom-button.commponent'
import {signInWithGoogle} from '../../Firebase/firebase.utils'

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})

    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    lable='Email'
                    required
                    />
                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    lable='Password'
                    required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > Sign In with Google</CustomButton>
                    </div>
                        
                </form>
            </div>
        )
    }

}

export default SignIn