import React from 'react';
import { Link  } from "react-router-dom";

export const Card = ({image,language,title, description,more }) => {


  return (
    <div className='card'>
        <div className='card-image'> <img src={image} className='card-img'/> </div>
        <div className='card-languages'> {language} </div>
        
        <div className='card-details'> 
            <div>{title}</div>
            <div className=' mobile-card-desc gray-text'>{description}</div>
          <Link to={more} className='link'>  <button>more</button></Link>
        </div>
    </div>
  )
}
