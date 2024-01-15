import React from 'react'

export const Title = ({title,link}) => {
  return (
    <div className='flex-j-sb'>
        <div className='title'><span className='purple'>#</span>{title} <div className='line'></div></div>
        {link?<div style={{width:"100px", marginTop:"20px"}}>VIEW ALL</div>:null}
    </div>
  )
}
