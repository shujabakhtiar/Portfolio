import React from 'react'
import {Title} from "../components/Title.jsx"
import { Card } from '../components/Card.jsx'
import design from "../assets/images/a2.svg"
import { SmallCard } from '../components/SmallCard.jsx'
export const Skills = () => {
  return (
    <div className='section'>
    <Title title="skills" />
    <div className='flex-j-sb'>
        <div><img src={design} className='sk-a2'/></div>
        <div className='sk-cards'>
          <SmallCard title="LANGUAGES" language="python, java, html, css,javascript"/>
        </div>

    </div>
    
    </div>
  )
}
