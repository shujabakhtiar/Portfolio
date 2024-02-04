import React, {useState,useEffect} from 'react'
import { Link,useLocation  } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();
  const isWorksRoute = location.pathname === '/';
  const [drawer,setDrawer]=useState(false);

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

  const redirectToExternalWebsite = (url) => {
    window.open(url, '_blank');
  };

 const  toggleDrawer=()=>{
    setDrawer(!drawer);
    document.body.style.overflow = drawer ? 'auto' : 'hidden';
  };

  return (
<>
<div className={` mobile-hide ${showNavbar ? 'media' : 'media-hide'}`}>
      <div className="v-line"></div>
      <div className="icons-container ">
        <GitHubIcon onClick={()=>redirectToExternalWebsite("https://github.com/shujabakhtiar")} className='icon' fontSize="medium"/>
   <LinkedInIcon onClick={()=>redirectToExternalWebsite("https://www.linkedin.com/in/shuja-bakhtiar/")}  className='icon'  fontSize="medium"/>
      </div>
      </div>

      
     
    <div className={` ${showNavbar ? 'navbar' : 'navbar-hide'}`}>
      <span className='desk-hide'></span>
      <Link to="/" className="link">Shuja B</Link>  

      <span className='burger-icon desk-hide'>
      <MenuIcon onClick={()=>{toggleDrawer()}}/>
      </span>
    
      {isWorksRoute?  <div  onClick={()=>{toggleDrawer()}} className={`flex-j-sb nv-list ${drawer ? 'drawer-open' : 'drawer-close'}`}>
       
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
