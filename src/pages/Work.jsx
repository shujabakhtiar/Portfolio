import React, {useState,useEffect} from 'react'

export const Work = () => {

  const [showIntro, setShowIntro] = useState(false);
  const optionsArray = [
    { title: 'INNOVATION TOOL', description: 'one place to jot down ideas and make storyboards',link:"/projects/f1" },
    { title: 'Edvora', description: 'an edtech platform' },
    { title: 'Jumping Blocks', description: 'threejs Game' },
    { title: 'The Spectater', description: 'Ai powered voice assistant' },
    { title: 'Chartea Lounge', description: 'Anime Style Restaurant' },
    { title: 'Rental Solutions', description: 'a car rental software' },

    // Add more options as needed
  ];
  useEffect(() => {
    // Simulate delay for the Navbar (adjust the delay time as needed)
    const timer = setTimeout(() => {
      setShowIntro(true);
    }, 500); // 1000 milliseconds (1 second)

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, []);
  return (
    <div className={`${showIntro? 'section visible flex-j-sb mobile-exp':'section'} `}  style={{marginTop:'100px'}} >      
    <div className='projects-title'>
      Projects 
    </div>
    <div className='flex-v-sb v-scroll'  >
    {optionsArray.map((option, index) => (
        <div key={index} className='w-op'>
          <b>{option.title}</b> <br/>
          <span className='red'>{option.description}</span>
        </div>
      ))}
    </div>
    </div>
  )
}
