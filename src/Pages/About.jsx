import React, { useEffect, useRef, useState } from 'react';
import './About.css'


const About = () => {

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load the background image when it enters the viewport
          const image = new Image();
          image.src = `${process.env.PUBLIC_URL}/groupabout.jpg`;
          image.onload = () => {
            entry.target.style.backgroundImage = `url(${image.src})`;
            setIsImageLoaded(true);
            observer.unobserve(entry.target);
          };
        }
      });
    });

    if (backgroundRef.current) {
      observer.observe(backgroundRef.current);
    }

    return () => {
      if (backgroundRef.current) {
        observer.unobserve(backgroundRef.current);
      }
    };
  }, []);



  
  return (
    <div div className='back' 
    ref={backgroundRef}
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/groupabout.png)`,
      backgroundColor:'black',
      // backgroundImage: 'url("/groupabout.png")', // Adjust the path to match your project structure
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // opacity:'50%',
      minHeight: '100vh', // Set an appropriate height
      // Add other styles as needed
      filter: isImageLoaded ? 'none' : 'blur(20px)',
      transition: 'filter 0.5s ease',
    }}>


<ul className='hero3-ul'>
            <li className='hero3-hey'>About me: </li>
            <li className='hero3-pre'>I'm a prefinal year student at BITS Pilani,Pilani Campus</li>
            <li className='hero3-branch'>Branch: Electrical And Electronics</li>
        </ul>
    </div>
  
    )

}

export default About