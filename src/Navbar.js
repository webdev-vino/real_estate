import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='Nav'>
        <ul className='Navbar'>
            <img src="/images/logo.png" alt="" height={"110px"}/>
            <li>Home</li>
            <li>About Us</li>
            <li>Projects</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <div>
            <button>Login</button>
            <button>Sign Up</button>
            </div>
        </ul>
    </div>
  )
}

export default Navbar