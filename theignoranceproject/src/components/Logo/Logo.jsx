

import React from 'react'
import { Link } from 'react-router-dom';
import './Logo.css';
import tipLogo from '../../assets/tipLogo.jpeg';

const Logo = () => {
  return (
    <div>
      <Link to='/' className='logoImgLink'>
      <img src={tipLogo} alt='Logo' className='logoImg' /></Link>
    </div>
  )
}

export default Logo
