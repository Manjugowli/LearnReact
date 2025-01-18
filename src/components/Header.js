import React, { useState } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'

const Header = () =>{
    const [ buttonName , setButtonName] = useState("Login")
    
    return (
        <div className='header'>
            <img className='logo' alt='logo' src={LOGO_URL} ></img>
            <div className='navBar'>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Contact'>Contact Us</Link>
                <div>Cart</div>
                <button className='login-btn' onClick={() => {
                    buttonName === 'Login' ? setButtonName("Logout") : setButtonName("Login")
                }}>{buttonName}</button>
            </div>
        </div>
    )
}

export default Header;