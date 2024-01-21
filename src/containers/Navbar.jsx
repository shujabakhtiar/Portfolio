import React, {useState,useEffect} from 'react'
import { Link,useLocation  } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();
  const isWorksRoute = location.pathname === '/';
  useEffect(() => {
    // Simulate delay for the Navbar (adjust the delay time as needed)
    const timer = setTimeout(() => {
      setShowNavbar(true);
    }, 1000); // 1000 milliseconds (1 second)

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
<>
<div className={` mobile-hide ${showNavbar ? 'media' : 'media-hide'}`}>
      <div className="v-line"></div>
      <div className="icons-container ">
        <GitHubIcon className='icon' fontSize="medium"/>
   <LinkedInIcon className='icon' fontSize="medium"/>
      </div>
      </div>
    <div className={` ${showNavbar ? 'navbar' : 'navbar-hide'}`}>
      <Link to="/" className="link">Shuja B</Link>  
      {isWorksRoute?  <div className='flex-j-sb nv-list mobile-hide'>
       
       <div className="link " onClick={() => scrollToSection('about')}>
            <span className='purple'>#</span>about-me
          </div>
          <div className="link" onClick={() => scrollToSection('experience')}>
            <span className='purple'>#</span>experience
          </div>

          <div className="link" onClick={() => scrollToSection('project')}>
            <span className='purple'>#</span>projects
          </div>

          <div className="link" onClick={() => scrollToSection('contact')}>
            <span className='purple'>#</span>contact-me
          </div>
      </div> :<></>}
     
    </div>
  </>
  )
}
