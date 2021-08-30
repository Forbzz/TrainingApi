import React, { useState } from 'react'

import './sign-up.scss'
import '../header/header.css'
import FormInput from "../form-input/form-input";
import {Redirect} from "react-router-dom";


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPassword, setCPassword] = useState('')
    const [username, setUsername] = useState('')
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault()
        console.log("Регистрация");

        const response = await fetch("https://localhost:44385/api/Authenticate/register",{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                username,
                email,
                password,
                ConfirmPassword
            })
        })

        console.log("Прием")
        const content = await response.json();

        console.log(content);
        setRedirect(true);

    }

    if(redirect){
        return <Redirect to='/login'/>
    }


    return (
        <div className='sign-in'>
            <form onSubmit={handleSubmit} className="my-form">
                <FormInput name='username' type='text' label='username'
                           handleChange={e => setUsername(e.target.value)} value={username} required />

                <FormInput name='email' type='email' label='email'
                           handleChange={e => setEmail(e.target.value)} value={email} required />

                <FormInput name='password' type='password' label='password'
                           handleChange={e => setPassword(e.target.value)} value={password} required />

                <FormInput name='ConfirmPassword' type='password' label='ConfirmPassword'
                           handleChange={e => setCPassword(e.target.value)} value={ConfirmPassword} required />

                <div className="buttons">
                    <button type='submit' className='btn btn-success option log-button'>Register</button>
                </div>
            </form>
        </div>
    )
}


export default SignUp