import React, { useEffect, useRef, useState } from 'react';
import "./Projects.css";
// import Typed from 'react-typed'; //for the typing effect we used typed.js
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Projects_Head from "./Projects_Head";
import Project_Cards from "./Project_Cards";





// function Projects() {








  // import './Socials.css';
  
  const Projects = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const backgroundRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Load the background image when it enters the viewport
            const image = new Image();
            image.src = `${process.env.PUBLIC_URL}/project05.png`;
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


    //adding the url of the websites that we need
    const handleDivClick_amazon = () => {
      // Replace 'https://example.com' with the URL you want to redirect to
      window.location.href = 'https://example.com';
    };

    const handleDivClick_toi = () => {
      // Replace 'https://example.com' with the URL you want to redirect to
      window.location.href = 'https://arush077.github.io/Times-Of-India-TOI-/';
    };

    const handleDivClick_resume = () => {
      // Replace 'https://example.com' with the URL you want to redirect to
      window.location.href = 'https://arush077.github.io/Resume-Generator/';
    };

    const handleDivClick_personal = () => {
      // Replace 'https://example.com' with the URL you want to redirect to
      window.location.href = '/';
    };





  return (
    <div className="Projects_class" 
    ref={backgroundRef}
    style={{
      // backgroundImage: `url(${process.env.PUBLIC_URL}/groupabout.png)`,
      // backgroundColor:'black',
       //backgroundImage: 'url("/groupabout.png")', // Adjust the path to match your project structure
       backgroundImage: `url(${process.env.PUBLIC_URL}/project05.png)`,
       backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // opacity:'50%',
      minHeight: '100vh', // Set an appropriate height
      // Add other styles as needed

      filter: isImageLoaded ? 'none' : 'blur(20px)',
        transition: 'filter 1.2s ease',

    }}>
    

    {/* <div className="c1"></div> */}
    {/* <Projects_Head /> */}
    {/*  
    <div className="body">
    <div class="bg">
    <h1>Kiberbash</h1>
    </div> */}

    {/* <Project_Cards/>
    <Project_Cards/>
    <Project_Cards/>
    <Project_Cards/> */}
    
    <div className="item item1"
    
    onClick={handleDivClick_amazon}
    
    >
     <h1 className="title"> Amazon Clone </h1>
     <p className="Description">An Amazon clone with Add To Cart Functionality</p>
     {/* <p className="Link"><a href='https://www.google.com/'>Link To Website</a></p> */}
      </div>

    <div className="item item2"
    onClick={handleDivClick_toi}>

    <h1 className="title"> Times Of India Clone </h1>
     <p className="Description">Static Front-End Webpage of Times Of India Website </p>
     {/* <p className="Link"><a href='https://www.google.com/'>Link To Website</a></p> */}
      </div>

    <div className="item item3"
    onClick={handleDivClick_resume}>

    <h1 className="title">Resume Generator </h1>
     <p className="Description">Want to make an instant Resume? Well here is the solution!</p>
     {/* <p className="Link"><a href='https://www.google.com/'>Link To Website</a></p> */}
    </div>
    <div className="item item4"
    onClick={handleDivClick_personal}>
    <h1 className="title">Personal Portfolio Website</h1>
     <p className="Description"> Well, you are currently here ;)  </p>
     {/* <p className="Link"><a href='https://www.google.com/'>Link To Website</a></p> */}
    </div>
    {/* <div className="item item5"></div> */}
    

    </div>
    
  );
}

export default Projects;
