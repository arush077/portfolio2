import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import './Home.css';
import '../Components/threed'
import { useTypewriter, Cursor } from "react-simple-typewriter";



const Home = () => {


  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load the background image when it enters the viewport
          const image = new Image();
          image.src = `${process.env.PUBLIC_URL}/grouphomepng.png`;
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



  const [text] = useTypewriter({
    words:['REACT','HTML','CSS'],          //FOR THE TYPEWRITING EFFECT
    loop: {},
    typeSpeed:120,
    deleteSpeed:100,
});




  return (
    <div className='main'>
    <div className='page-container' 
    ref={backgroundRef}
    style={{
      //  backgroundImage: 'url("../../public/grouphomepng.png")', // Adjust the path to match your project structure
      backgroundImage: `url(${process.env.PUBLIC_URL}/grouphomepng (2).jpg)`,
      // backgroundImage:img,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      
      // opacity:'50%',
      minHeight: '100vh', // Set an appropriate height
      // Add other styles as needed
      filter: isImageLoaded ? 'none' : 'blur(20px)',
        transition: 'filter 1s ease',
    }}>
        {/* <div className='ell'><img src="/Ellipse.png" alt="" /></div> */}
        {/* <div className='Hey'> */}
        <ul className='hero-ul'>
            <li className='hero-hey'>Hey</li>
            <li className='hero-pre'>I'm Arush</li>
            <br/>
            <div className='Home_Techused'>
            Tech used:
            </div>
            <div className='Home_TypeWriter'>
              
            {text}
            </div>
            {/* <a href="https://check.so" class="btn-shine" target="_blank">Get early access</a> */}
            {/* <li className='hero-branch'></li> */}
        </ul>
       
    </div>

    <div className='page2' id='hi_page2'>
      <h1 className='animated-textx'>HI</h1>
    </div>


    </div>

  );
};

export default Home;