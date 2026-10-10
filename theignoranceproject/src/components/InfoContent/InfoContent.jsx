import React from 'react'
import './InfoContent.css'

const InfoContent = ({titleLeft, descriptionLeft, titleRight, descriptionRight}) => {
  return (
    <div className='infoContentContainer'>
        <div className='descriptionLeft'>
            <h2>{titleLeft}</h2>
            {descriptionLeft.map ((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>

        <div className='descriptionRight'>
            <h2>{titleRight}</h2>
            {descriptionRight.map ((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
      
    </div>
  )
}

export default InfoContent
