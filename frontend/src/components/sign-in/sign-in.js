import React, { useState } from 'react'
import {authHeader} from "../../api";
import './sign-in.scss'
import '../header/header.css'
import FormInput from "../form-input/form-input";
import {Redirect} from "react-router-dom";

// import FormInput from '../form-input/form-input.component'
// import CustomButton from '../custom-button/custom-button.component'


const SignIn = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault()
        console.log("ВХОД");

        const response = await fetch("https://localhost:44344/api/Authenticate/login",{
            method: "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                username,
                password
            })
        })

        console.log("Прием")

        const content = await response.json();
        localStorage.setItem("user", content.token);
        console.log(content);
        setRedirect(true);

    }

    if(redirect)
    {
        return <Redirect to='/'/>
    }

    return (
        <div className='sign-in'>
            <form onSubmit={handleSubmit} className="my-form">
                <FormInput name='username' type='text' label='username'
                           handleChange={e => setUsername(e.target.value)} value={username} required />

                <FormInput name='password' type='password' label='password'
                           handleChange={e => setPassword(e.target.value)} value={password} required />

                <div className="buttons">
                    <button type='submit' className='btn btn-success option log-button'>Login</button>
                </div>
            </form>
        </div>
    )
}


export default SignIn