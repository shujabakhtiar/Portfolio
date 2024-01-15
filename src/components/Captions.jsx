import React from 'react'

export const Captions = ({caption,by}) => {
  return (
    <div className='section center'>
        <div className='cc-container'>
            <div className='quote center'>
               <p>{caption}</p>
            </div>
            <div className="by center">
    <p>{by}</p>
                </div>
        </div>
    </div>
  )
}
