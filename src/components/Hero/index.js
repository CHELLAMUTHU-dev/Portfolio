import { useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile from '../../assets/profile.png'
import resume from '../../assets/resume.pdf'
import { FaDownload ,FaWhatsapp ,FaGithub,FaLinkedin  } from "react-icons/fa";


import './index.css'

const Hero = () => {
  useEffect(() => {
    // Create stars when component mounts
    const createStars = () => {
      const container = document.querySelector('.hero');
      if (!container) return;
      
      // Clear existing stars
      const existingStars = document.querySelectorAll('.star');
      existingStars.forEach(star => star.remove());
      
      // Create new stars
      const starsCount = 150; // Number of stars
      const fragment = document.createDocumentFragment();
      
      for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random positioning
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random size (1px to 3px)
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        fragment.appendChild(star);
      }
      
      container.appendChild(fragment);
    };

    createStars();
    
    // Recreate stars on resize for responsiveness
    const handleResize = () => createStars();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id='home' className="hero">
        <>
            <img src={profile} alt="" className='hero-profile' />
        </>
        <div className="hero-content">
            <h1>Hi, I'm Chellamuthumari</h1>
            <h2>Full Stack Developer (Fresher) with hands-on experience in building web applications using the MERN stack</h2>
            <p>Passionate about solving real-world problems through technology. Specialized in React.js, Node.js, Express.js and responsive design. Looking forward to starting my professional journey in a forward-thinking organization </p>
            <div className="hero-action">
                <div className="hero-connect">
                <AnchorLink className='anchor-link' offset={50} href='#contact'>
                    Connect With Me
                </AnchorLink>
                </div>
                <a href={resume} target='_blank' rel='noreferrer' className="hero-resume">
                    <FaDownload/>
                My resume
                </a>
            </div>
            <div className="social-media">
                <a href="https://github.com/CHELLAMUTHU-dev/" target='_blank' rel='noreferrer' className="social-media-icon">
                    <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/chellamuthumari/" target='_blank' rel='noreferrer' className="social-media-icon">
                    <FaLinkedin/>
                </a>
                <a href="https://wa.me/918870926742" target='_blank' rel='noreferrer' className="social-media-icon"> 
                    <FaWhatsapp/>
                </a>
               
            </div>
            </div>
      </div>
  );
};

export default Hero;