import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';


const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>

        </Link>
        <div className='options'>
            <Link className='option' to='/about'>
                ABOUT US
            </Link>
            <Link className='option' to='/'>
                ORDER
            </Link>
            {currentUser ? (
                <div className='option'>
                    SIGN OUT
                </div>
            ) : (
                <Link to='/login' className='btn btn-success option progress-bar-animated progress-bar-striped progress-bar'>
                    SIGN IN
                </Link>
            )}

        </div>

    </div>
);


export default Header;