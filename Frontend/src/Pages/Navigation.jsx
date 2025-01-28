import React from 'react'
import '../Styles/Navigation.css';
import { useState,useEffect } from 'react';
const Navigation = () => {

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Pixels scrolled from the top
      const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / documentHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='outer-nav'>

    <nav>
        <div className='nav border-8 border-black'>
          <div className='progress' style={{ width: `${scrollProgress}%` }}>
            <ul>
                <li><a className="text-black" href="/">Home</a></li>
                <li><a className="text-black" href="skills">Skills</a></li>
                <li><a className="text-black" href="projects">Projects</a></li>
                <li><a className="text-black" href="contact">Contact Me</a></li>
                <li><a className="text-black" href="work">Work</a></li>
                
            </ul>
          </div>
            <ul className='main-ul'>
                <li><a className="text-white" href="/">Home</a></li>
                <li><a className="text-white" href="skills">Skills</a></li>
                <li><a className="text-white" href="projects">Projects</a></li>
                <li><a className="text-white" href="contact">Contact Me</a></li>
                <li><a className="text-white" href="work">Work</a></li>

                
            </ul>
          
          {/* <div className='nav-progress' style={{ width: `${scrollProgress}%` }} ></div> */}
        </div>
    </nav>

    </div>
  )
}

export default Navigation