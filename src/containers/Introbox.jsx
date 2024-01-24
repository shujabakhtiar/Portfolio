import React, {useState,useEffect} from 'react'
import block from "../assets/images/a1-a.svg"
import dots from "../assets/images/Dots.svg"
import Typewriter from '../assets/helper/Typewriter'
export const Introbox = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [profession, setProfession] = useState('Frontend Developer');
  const phrases = ['Frontend Developer', 'Computer Engineer'];
  const period = 2000; // Specify the period in milliseconds

  useEffect(() => {
    // Simulate delay for the Navbar (adjust the delay time as needed)
    const timer = setTimeout(() => {
      setShowIntro(true);
    }, 1500); // 1000 milliseconds (1 second)

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  
  return (
    <div id="Introbox" className={`${showIntro? 'section visible flex-j-sb':'section'} `} >
        <div className='intro-heading'>
           <div className='flex-v-sb'>
              <h2> Shuja Bakhtiar,<br/> <span className='typing'> Developer</span></h2>
               <h4 className='gray-text'>Crafting complete engineering solutions for online excellence.</h4>
               <button onClick={() => scrollToSection('contact')}>Contact Me !!</button>
           </div>
        </div>
        <div className='art1 mobile-hide' >
          <div className='a1-a'><img src={block}/></div>
          <div className='a1-b'><img src={dots}/></div>
        </div>
    </div>
  )
}
