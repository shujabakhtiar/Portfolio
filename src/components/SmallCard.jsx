import React from 'react'

export const SmallCard = ({title,language}) => {
  return (
    <div className='scard'>
    <div className='scard-title'> {title}  </div>
    
    <div className='scard-details'> 
        {language}
    </div>
</div>
  )
}
