import React from 'react'
import { Introbox } from '../containers/Introbox.jsx'
import { Captions } from '../components/Captions.jsx'
import {Projects} from '../containers/Projects.jsx'
import { Skills } from '../containers/Skills.jsx'
import { About } from '../containers/About.jsx'
import { Contact } from '../containers/Contact.jsx'
import {Game} from "../pages/Game.jsx"
export const Home = () => {
  return (
    <div className='home'>
        <Introbox/>
        <Captions caption="With Great Power comes no Responsibility" by="-Bad Spidey"/>
        <Projects/>
        <Skills/>
        <About/>
        <Contact/>
    </div>
  )
}
