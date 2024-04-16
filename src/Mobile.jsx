import React from 'react'
import './mobile.css'




function Mobile(props) {
  
const {image,name,price} = props;
  return (
   
    <div className='main'>
        
        <img src={image} alt="" className="image" />
        
        <div>
            <h2>{name}</h2>
            <p>{price}</p>
            <button>BUY</button>
        </div>

    </div>
  )
}

export default Mobile
