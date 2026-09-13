

import React from 'react'
import './Banner.css';

const Banner = ({img, title, socialLinks}) => {
  return (
    <div className='banner'
    style={{backgroundImage: `url(${img})`}}>

        <h1 className='bannerContent'>{title}</h1>

        <div className='socialLinks'>
          {socialLinks.map((social) => (
            <a href={social.link} 
            className='socialIcon' 
            key={social.alt}>

            <img src={social.icon} 
            alt={social.alt} 
            className='socialIconImg'/>

            </a>
          ))}
    </div>
      
    </div>
  );
};

export default Banner;
