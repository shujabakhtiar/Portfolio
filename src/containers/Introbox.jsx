import React from 'react'
import block from "../assets/images/a1-a.svg"
import dots from "../assets/images/Dots.svg"
export const Introbox = () => {
  return (
    <div className='section flex-j-sb'>
        <div className='intro-heading'>
           <div className='flex-v-sb'>
              <h2> Shuja is a web designer and front-end developer </h2>
               <h4 className='gray-text'>He crafts responsive websites where technologies meet creativity</h4>
               <button>Contact Me !!</button>
           </div>
        </div>
        <div className='art1'>
          <div className='a1-a'><img src={block}/></div>
          <div className='a1-b'><img src={dots}/></div>
        </div>
    </div>
  )
}
