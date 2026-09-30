import React from 'react'
import './PhotoText.css'

const PhotoText = ({ img, imgAlt, title, description}) => {
  return (
    <div className='photoAndText'>
        <img 
        src={img}
        alt={imgAlt}
        className='photoImg'
        />

        <div className='TextInfo'>
            <h1 className='TextTitle'>{title}</h1>
            <p className='TextDes'>{description}</p>
        </div>
      
    </div>
  )
}

export default PhotoText
