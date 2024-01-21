import React, {useRef, useEffect, useState} from 'react'
import {Title} from "../components/Title.jsx"
 import { Card } from '../components/Card.jsx'
import edLogo from "../assets/images/edLogo.svg"
import three from "../assets/images/Three.js_Icon.svg"
import xitLogo from "../assets/images/xitlogo.png"
 const projectList = [
    {
      image: xitLogo, // Replace with the actual path to the image
      language: 'VueJs javascript html css', // Replace with the actual programming language
      title: 'XIT Innovations', // Replace with the actual project title
      description: 'A Story Board application which assists users to express their ideas, and projects in a systematic way', // Replace with the actual project description
      more: '/projects/f1', // Replace with the actual link or details
    },
    {
      image: edLogo, // Replace with the actual path to the image
      language: 'ReactJs NEXTjs javascript html css', // Replace with the actual programming language
      title: 'EdVora', // Replace with the actual project title
      description: 'An educational platform fostering collaboration between institutions and students, offering resource sharing, assessments, and live video learning.', // Replace with the actual project description
      more: '/projects/ed', // Replace with the actual link or details
    }, {
      image: three, // Replace with the actual path to the image
      language: 'ThreeJs javascript html css', // Replace with the actual programming language
      title: 'Understanding ThreeJS', // Replace with the actual project title
      description:"Delved into the intricacies of ThreeJs library for 3D graphics, enabling me to explore its capabilities and and applications in web-based 3D development", // Replace with the actual project description",
      more: "/projects/threejs", // Replace with the actual link or details
    },

];

export const Projects = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const optionsArray = [
    { title: 'F1 Studioz', description: 'one Line' },
    { title: 'XIT Innovation', description: 'another Line' },
    { title: 'Three JS', description: 'yet another Line' },
    // Add more options as needed
  ];
  const handleNextButtonClick = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % projectList.length);
  };
  
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
<div id="project"  ref={aboutRef} className={`section  ${isVisible ? 'visible' : ''}`} >
        <Title title="projects" link="/projects"/>
      
        <div className='cards mobile-hide'>
        <Card language="VueJs javascript html css" title="XIT Innovations" description="A Story Board application which assists users to express their ideas, and projects in a systematic way" more="/projects/f1" image={xitLogo}/>
         <Card language="ReactJs NEXTjs javascript html css" title="EdVora" description="An educational platform fostering collaboration between institutions and students, offering resource sharing, assessments, and live video learning." more="/projects/ed" image={edLogo}/>
        <Card language="ThreeJs javascript html css" title="Understanding ThreeJS" description="Delved into the intricacies of ThreeJs library for 3D graphics, enabling me to explore its capabilities and and applications in web-based 3D development" more="/projects/threejs" image={three}/>
  
        </div>

        <div className="cards desk-hide">
        <Card
          language={projectList[currentCardIndex].language}
          title={projectList[currentCardIndex].title}
          description={projectList[currentCardIndex].description}
          more={projectList[currentCardIndex].more}
          image={projectList[currentCardIndex].image}
        />
      </div>

      <div className="next-button-container desk-hide">
      <button className="next-button" onClick={handleNextButtonClick}>
          Prev
        </button>
        <button className="next-button" onClick={handleNextButtonClick}>
          Next
        </button>
      </div>   
        
          {/**  <div className='flex-v-sb p-scroll' style={{width:'600px'}} >
    {optionsArray.map((option, index) => (
        <div key={index} className='p-op'>
          <b>{option.title}</b> <br/>
          <span className='red'>{option.description}</span>
        </div>
      ))}
    </div> */}

    </div>
  )
}
