import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom';

export const Navbar = () => {
  return (

    <div className='navbar'>
      <div>Shuja B</div>
      <div className='flex-j-sb nv-list'>
        <Link to="/" ><div className="link"> <span className='purple'>#</span>home</div></Link>
        <Link to="/" ><div className="link"> <span className='purple'>#</span>home</div></Link>
        <Link to="/" ><div className="link"> <span className='purple'>#</span>home</div></Link>

      </div>
    </div>
  )
}
