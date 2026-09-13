import React from 'react'
import './Social.css';

const Social = ({icon, link, alt}) => {
  return (
    <div>
        <a href={link}
          className='SocialIcon'>

            <img src={icon} alt={alt} className='SocialIconImg'/>
        </a>
       
    </div>
  )
}

export default Social;
