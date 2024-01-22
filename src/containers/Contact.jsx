import React, {useRef, useEffect, useState} from 'react'
import {Title} from "../components/Title"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const copyToClipboard = () => {
    const emailToCopy = 'shujamsi22@gmail.com';

    // Create a temporary textarea element
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = emailToCopy;

    // Append the textarea element to the document
    document.body.appendChild(tempTextArea);

    // Select the textarea content
    tempTextArea.select();

    // Copy the selected content to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea element
    document.body.removeChild(tempTextArea);

    // Show an alert to notify the user
    alert('Email copied to clipboard: ' + emailToCopy);
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
   
<div id="contact" ref={aboutRef} className={`section  ${isVisible ? 'visible' : ''}`} >
        <Title title="contact" />
        <div className='flex-j-sb'>
            <div className='mobile-hide'>
                <p className='text gray-text'>
                If you're interested in collaboration or exploring work opportunities, Feel free to Connect.   </p>
            </div>
            <div>
                <div className='contact'>
                  <span className="margin-10">Lets Connect Here !</span>
                  <div className="margin-10 link icon-text" onClick={copyToClipboard}><EmailIcon/> shujamsi22@gmail.com</div>
                  <a href="https://www.linkedin.com/in/shuja-bakhtiar/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="link margin-10 icon-text"> 
                  <LinkedInIcon/> LinkedIn : Shuja Bakhtiar
</a>
               
                </div>
            </div>

        </div>
    </div>
  )
}
