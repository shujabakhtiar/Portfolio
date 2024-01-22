import React, {useRef, useEffect, useState} from 'react'
import { Link  } from "react-router-dom";
import LinkIcon from '@mui/icons-material/Link';

export const FStudioz = ({Data}) => {
    const [showIntro, setShowIntro] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);
   
  
    useEffect(() => {
      window.scrollTo(0, 0);
      return () => {
      };
    }, []); 

    const redirectToExternalWebsite = (url) => {
      window.open(url, '_blank');
    };

    useEffect(() => {
      console.log("DATA: ",Data)
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
    useEffect(() => {
        // Simulate delay for the Navbar (adjust the delay time as needed)
        const timer = setTimeout(() => {
          setShowIntro(true);
        }, 500); // 1000 milliseconds (1 second)
    
        return () => clearTimeout(timer); // Clear the timer on component unmount
      }, []);
  return (
 <div className={`${showIntro? 'section visible work':'section'} `}   >  
 <div className='big-title'>{Data.appName}</div><br/>
 <div className='sub-title' ><>{Data.appSubtitle}</>
  
 {Data.liveLink?
  <span className='trylink' onClick={()=>redirectToExternalWebsite(Data.liveLink)}><LinkIcon/>  TRY IT LIVE</span>
  :
  <></>
} 
</div>

 <div className='poster'>
 <img src={Data.img} className='p-img'/>

 </div>
 <div  ref={aboutRef} className={`section   ${isVisible ? 'visible' : ''}`} >
   <div className='data-section'>
      <div className='work-title'>{Data.appName}</div>
      <div className='work-text1'>{Data.appDescription}</div>
      <div className='work-text'>{Data.appHowItStarted}</div>
   </div>
    
 </div>
 <div  className={`section   ${isVisible ? 'visible' : ''}`} >
   <div className='data-section'>
      <div className='work-title'>The GOAL</div>
      <div className='work-text1'>{Data.goalDescription}</div>
      <div className='work-text'>{Data.goalDescription2}</div>
   </div>
    
 </div>
{/**LAUNCH DATE  */}
 <div  className={`section   ${isVisible ? 'visible' : ''}`} >
   <div className='data-section'>
      <div className='work-title'>{Data.launchTitle}</div>
      <div className='work-text1'>{Data.launchDescription}</div>
      {Data.appImg.map((image, index) => (
      <img key={index} src={image} className='p-img' alt={`Image ${index + 1}`} />
    ))} 
          <div className='work-nda'>{Data.liveEnd}</div>

      </div>
    
 </div>

 <div   className={`section   ${isVisible ? 'visible' : ''}`} >
   <div className='data-section'>
      <div className='work-title'>The Works</div>
      {Data.myRole.map((data, index) => {
  return <div key={index} className='work-text1'> {data}</div>;
})}
    
   </div>
    
 </div>
 <div   className={`section   ${isVisible ? 'visible' : ''}`} >
   <div className='data-section'>
      <div className='work-title'>{Data.outroTitle}</div>
      {Data.outro.map((data, index) => {
  return <div key={index} className='work-text1'> {data}</div>;
})}
   

   </div>
    
 </div>
 <div className='next-page'>
 <Link to={Data.next} className='link'>  <button  onClick={() => window.scrollTo(0, 0)}>Next Project</button></Link> </div>
 </div>  )
}
