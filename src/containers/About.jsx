import React from 'react'
import { Title } from '../components/Title'
export const About = () => {
  return (
   
    <div className='section'>
        <Title title="about-me" />
        <div className='flex-j-sb'>
            <div>
                <p className='text gray-text'>
                Hello, i’m Elias! <br/> <br/>

I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.  <br/> <br/>

Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                </p>
                <br/>
                <br/>
                <button>Read More</button>
            </div>
            <div>
                IMAGE
            </div>

        </div>
    </div>
  )
}
