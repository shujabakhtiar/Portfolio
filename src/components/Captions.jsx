import React, {useRef, useEffect,useState} from 'react'
export const Captions = ({caption,by}) => {

  
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
    <div ref={aboutRef} className={`section center ${isVisible ? 'visible' : ''}`}>
        <div className='cc-container'>
            <div className='quote center'>
               {caption}
            </div>
            <div className="by center">
    {by}
                </div>
        </div>
    </div>
  )
}
