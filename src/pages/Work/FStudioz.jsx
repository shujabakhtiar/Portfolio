import React, {useRef, useEffect, useState} from 'react'


export const FStudioz = ({Data}) => {
    const [showIntro, setShowIntro] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const aboutRef = useRef(null);
   
  
    useEffect(() => {
      // Scroll to the top of the page when the component mounts
      window.scrollTo(0, 0);
  
   
  
      // Cleanup the listener when the component unmounts
      return () => {
      };
    }, []); 


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
 <div className='sub-title'>{Data.appSubtitle}</div>
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
    ))}   </div>
    
 </div>

 <div   className={`section   ${isVisible ? 'visible' : ''}`} >
   <div className='data-section'>
      <div className='work-title'>The Works</div>
      <div className='work-text1'>{Data.myRole}</div>
      <div className='work-text1'>{Data.myRole2}</div>
      <div className='work-text1'>{Data.myRole3}</div>

   </div>
    
 </div>
 </div>  )
}
