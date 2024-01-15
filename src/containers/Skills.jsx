import React from 'react'
import {Title} from "../components/Title.jsx"
import { Card } from '../components/Card.jsx'
import design from "../assets/images/a2.svg"
export const Skills = () => {
  return (
    <div className='section'>
    <Title title="skills" />
    <div className='flex-j-sb'>
        <div><img src={design} className='sk-a2'/></div>
        <div className='sk-cards'>
            CARDS
        </div>

    </div>
    
    </div>
  )
}
