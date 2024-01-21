import React, {useRef, useEffect, useState} from 'react'
import { Title } from '../components/Title'
import block from "../assets/images/a1-a.svg"
import dots from "../assets/images/Dots.svg"
export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);
  return (
   
<div  id= "about" ref={aboutRef} className={`section  ${isVisible ? 'visible' : ''}`} >
        <Title title="about-me" />
        <div className='flex-j-sb'>
            <div>
                <p className='text'>
                Hello I am Shuja B,  <br/> <br/>

              A Developer with a knack for creating awesome user experiences. Armed with a master's in Cloud Computing from Newcastle University,<br/> I thrive in both building responsive web apps using React.js/Vue.js and navigating the cloud with AWS and Azure.<br/><br/>
  Transforming my creativity and knowledge into into captivating and efficient digital solutions is my passion. I am excited to continue this journey of digital excellence in this ever-evolving digital landscape.  
                </p>
                <br/>
                <br/>
            </div>
            <div className='art1 mobile-hide'>
          <div className='a1-b'><img src={dots}/></div>
          <div className='a1-a'><img src={dots}/></div>

        </div>

        </div>
    </div>
  )
}
