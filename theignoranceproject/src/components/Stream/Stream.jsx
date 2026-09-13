import React from 'react'

const Stream = ({ img, imgAlt, title}) => {
  return (
    <div className= 'StreamCard'>
        <img src ={img} alt ={imgAlt} className='StreamImg' />

        <div>
            <h1 title={title}> </h1>
        </div>


    </div>

   
  )
}

export default Stream;
