

import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navContainer'>
        <li><Link to='/' className='navLinks'>Home</Link></li>
        <li><Link to='/about' className='navLinks'>About</Link></li>
        <li><Link to='/videos' className='navLinks'>Videos</Link></li>
        <li><Link to='/books' className='navLinks'>Book Club</Link></li>
        <li><Link to='/contact' className='navLinks'>Contact</Link></li>
      
    </div>
  )
}

export default Navbar;
