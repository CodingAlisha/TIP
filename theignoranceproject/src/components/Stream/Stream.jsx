import React from 'react'
import './Stream.css'

const StreamCard = ({ img, imgAlt, title, subTitle, socialImg}) => {
  return (
    <div className= 'streamCard'>
        <img src ={img} alt ={imgAlt} className='streamImg' />

        <div className='streamText'>

            <h1 className='streamTitle'>{title}</h1>
            <p className='streamSubTitle'>{subTitle}</p>
           

            <div className='streamSocialImg'>
            <a href={socialImg.link}>
              <img 
              src ={socialImg.icon} 
              alt={socialImg.alt} 
              className='streamSocialIconImg' 
              />
              </a>
         </div>
            </div>
       


    </div>

   
  )
}

export default StreamCard;
