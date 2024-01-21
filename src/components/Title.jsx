import React from 'react'
import { Link } from "react-router-dom";

export const Title = ({title,link}) => {
  return (
    <div className='flex-j-sb'>
        <div className='title'><span className='purple'>#</span>{title} <div className='line mobile-hide'></div></div>
        {link?<Link className="link" to={link} style={{width:"100px", marginTop:"20px"}}>VIEW ALL</Link>:null}
    </div>
  )
}
