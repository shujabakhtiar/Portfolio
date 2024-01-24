import React, {useRef, useEffect, useState} from 'react'
import {Title} from "../components/Title.jsx"
export const Experience = () => {

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

const [role,setRole]=useState("UI Developer");
const [company, setCompany] = useState("F1Studioz");
const [date, setDate]= useState("2022");
const[details, setDetails]=useState(["Launched into the F1 Studioz adventure, taking on Project XIT Innovations. The mission? Master Vue.js in just one week. The outcome? Crafted multiple models that breathed life into the project.","Teamed up with XIT Innovations to create a groundbreaking storyboard app, empowering colleagues to design captivating presentations. Introduced unique features for effortless drawing, dragging, and resizing—an innovation unfolding with every click and drag.","Navigated a fascinating maze within an existing codebase, delving deep into databases and grasping codebase standards. Unraveled mysteries and maintained the rhythm of established coding norms."]);
const [selected,setSelected]=useState(0);
const [tags,setTags]=useState(["VueJs","HTML","CSS","TypeScript","Strapi","Nodejs","SQL","GitLab","git"])
const changeExperience = (op)=>{
  if(op==1){
    setRole("UI Developer");
    setCompany("F1 Studioz");
    setDate("2021-2022");
    setDetails(["Launched into the F1 Studioz adventure, taking on Project XIT Innovations. The mission? Master Vue.js in just one week. The outcome? Crafted multiple models that breathed life into the project.","Teamed up with XIT Innovations to create a groundbreaking storyboard app, empowering colleagues to design captivating presentations. Introduced unique features for effortless drawing, dragging, and resizing—an innovation unfolding with every click and drag.","Navigated a fascinating maze within an existing codebase, delving deep into databases and grasping codebase standards. Unraveled mysteries and maintained the rhythm of established coding norms."]);
    setSelected(0);
    setTags(["VueJs","HTML","CSS","TypeScript","Strapi","Nodejs","SQL",,"GitLab","git"])

  }
  if(op==2){
    setRole("Lead Frontend Developer");
    setCompany("Starwisp Industries");
    setDate("2020-2021");
    setDetails(["Led Frontend development at Starwisp Industries, architecting the entire frontend and application flow. Collaborated closely with UI/UX teams, creating a robust codebase. Engaged with backend teams to assist in schema creation, ensuring seamless integration.","Designed various components for Edvora, an ed tech application, including a social media page, marketing landing page, and sub-applications: Video Conferencing App,Personal Notes, Social Media, and Assignments & Tests.","Ensured seamless interaction between all components to provide students with a comprehensive platform for accessing grades, attendance details, notes, presentations, and assignment submissions."])
    setSelected(1);
    setTags(["ReactJs","HTML","CSS","TypeScript","AWS","Nodejs","SQL","github","git"])

  }
}
  return (
<div id="experience" ref={aboutRef} className={`section  ${isVisible ? 'visible' : ''}`} >
    <Title title="professional-journey" />
    <div className='flex-j-sb mobile-exp' style={{marginTop:"30px", minHeight:"300px",maxHeight:"500px", }} >
      <div className='exp-menu'>
    
        <div className={`exp-op  ${selected === 0 ? 'exp-selected' : ''}`} onClick={()=>changeExperience(1)} >F1 Studioz</div>
        <div className={`exp-op ${selected === 1 ? 'exp-selected' : ''}`} onClick={()=>changeExperience(2)}>Starwisp Industries</div>
      </div>
      <div className='exp-details'>
        <div className='p-title'>{role} <span className='highlight'>@{company}</span></div>
        <div className='p-tags'>
        {tags.map((data, index) => {
  return <div key={index} className='p-tag'> {data}</div>;
})}
        
        </div>
        <div className='p-date'>{date}</div>
        <div className='p-details'>
        
        {details.map(d=>{
           return  <li>{d}</li>
        })}</div>
      </div>
    </div>       
    
    </div>  )
}
