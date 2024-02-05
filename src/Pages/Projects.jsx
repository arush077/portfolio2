import React from "react";
import "./Projects.css";
// import Typed from 'react-typed'; //for the typing effect we used typed.js
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Projects_Head from "./Projects_Head";
import Project_Cards from "./Project_Cards";





function Projects() {


  return (
    <div className="Projects_class" style={{
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
    
    <div className="item item1">
     <h1 className="title"> Amazon Clone </h1>
     <p className="Description">An Amazon clone with Add To Cart Functionality</p>
     <p className="Link">Link :</p>
      </div>

    <div className="item item2">
    <h1 className="title"> Times Of India Clone </h1>
     <p className="Description">Static Front-End Webpage of Times Of India Website </p>
     <p className="Link">Link :</p>
      </div>

    <div className="item item3">
    <h1 className="title">Resume Generator </h1>
     <p className="Description">Want to make an instant Resume? Well here is the solution!</p>
     <p className="Link">Link :</p>
    </div>
    <div className="item item4">
    <h1 className="title">Personal Portfolio Website</h1>
     <p className="Description"> Well, you are currently here ;)  </p>
     <p className="Link">Link :</p>
    </div>
    {/* <div className="item item5"></div> */}
    

    </div>
    
  );
}

export default Projects;
