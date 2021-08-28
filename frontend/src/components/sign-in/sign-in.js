import React, { useState } from 'react'

import './sign-in.scss'
import '../header/header.css'
import FormInput from "../form-input/form-input";

// import FormInput from '../form-input/form-input.component'
// import CustomButton from '../custom-button/custom-button.component'


const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()
        console.log("ВХОД");
        // try {
        //     await auth.signInWithEmailAndPassword(email, password)
        //     setEmail('')
        //     setPassword('')
        // } catch (error) {
        //     console.log('error occured in sign-in handleSubmit ' + error.message)
        // }

    }
    const handleChange = event => {
        const { value, name } = event.target;
        // if there will be more than 2 fiels, this will be bad
        name === 'email' ? setEmail(value) : setPassword(value)
    }

    return (
        <div className='sign-in'>
            <form onSubmit={handleSubmit} className="my-form">
                <FormInput name='email' type='email' label='email'
                           handleChange={handleChange} value={email} required />

                <FormInput name='password' type='password' label='password'
                           handleChange={handleChange} value={password} required />

                <div className="buttons">
                    <button type='submit' className='btn btn-success option log-button'>Login</button>
                </div>
            </form>
        </div>
    )
}


export default SignIn