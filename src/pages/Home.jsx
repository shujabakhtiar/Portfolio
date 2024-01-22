import React from 'react'
import { Introbox } from '../containers/Introbox.jsx'
import { Captions } from '../components/Captions.jsx'
import {Projects} from '../containers/Projects.jsx'
import { Skills } from '../containers/Skills.jsx'
import { About } from '../containers/About.jsx'
import { Contact } from '../containers/Contact.jsx'
import {Game} from "../pages/Game.jsx"
import { Experience } from '../containers/Experience.jsx'
export const Home = () => {
  return (
    <div className='home'>
         <Introbox/>
 <Captions caption="Innovation distinguishes between a leader and a follower" by="- Steve Jobs"/>
          <About/>

         <Experience/>
     <Projects link="/projects"/>
    <Skills/>
        
      
   <Contact/>
  

    </div>
  )
}
