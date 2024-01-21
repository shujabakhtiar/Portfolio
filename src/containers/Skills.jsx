import React, {useRef, useEffect, useState} from 'react'
import {Title} from "../components/Title.jsx"
import { Card } from '../components/Card.jsx'
import design from "../assets/images/a2.svg"
import { SmallCard } from '../components/SmallCard.jsx'
export const Skills = () => {

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
<div  ref={aboutRef} className={`section  ${isVisible ? 'visible' : ''}`} >
    <Title title="skills" />
    <div className='flex-j-sb mobile-center'>
        <div className='skill-display'><img src={design} className='sk-a2'/></div>
        <div className='sk-cards mobile-hide'>
          <div className='flex-j-sb'>
          <SmallCard title="  LANGUAGES" language="  javascript, typescript, html, css"/>
          <SmallCard title="  LANGUAGES" language="  Java, Python, C++, SQL"/>

          <SmallCard title="  FRAMEWORKS" language="  React.js , Vue Js "/>

          </div>
          <div className='flex-j-sb'>

          <SmallCard title="  CLOUD" language="  aws, azure "/>
          <SmallCard title="  DEV-OPS" language="  DOCKER, Kubernetees, Terraform"/>


          </div>
          <div className='flex-j-sb'>
          <SmallCard title="  FULL-STACK" language="  MERN stack, VERN stack"/>

          <SmallCard title="  Learning" language="  three.js, AWS Associate Architect "/>
          <SmallCard title="  DATA-ENGINEERING" language="  HADOOP, neo4J, SPARK, SQL, NOSQL"/>

          </div>
        </div>

        <div className='sk-cards desk-hide'>
          <div className='sk-cards-wrapper'>
          <SmallCard title="  LANGUAGES" language="  javascript, typescript, html, css"/>
          <SmallCard title="  LANGUAGES" language="  Java, Python, C++, SQL"/>
          <SmallCard title="  FRAMEWORKS" language="  React.js , Vue Js "/>
          <SmallCard title="  CLOUD" language="  aws, azure "/>
          <SmallCard title="  DEV-OPS" language="  DOCKER, Kubernetees, Terraform"/>
          <SmallCard title="  FULL-STACK" language="  MERN stack, VERN stack"/>
          <SmallCard title="  Learning" language="  three.js, AWS Associate Architect "/>
          <SmallCard title="  DATA-ENGINEERING" language="  HADOOP, neo4J, SPARK, SQL, NOSQL"/>
    
          </div>
    </div>

    </div>
    
    </div>
  )
}
