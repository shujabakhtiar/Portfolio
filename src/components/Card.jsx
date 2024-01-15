import React from 'react'

export const Card = ({image,language,title, description,more }) => {
  return (
    <div className='card'>
        <div className='card-image'> IMAGE </div>
        <div className='card-languages'> {language} </div>
        
        <div className='card-details'> 
            <div>TITLE</div>
            <div className='gray-text'>description</div>
            <button>more</button>
        </div>
    </div>
  )
}
