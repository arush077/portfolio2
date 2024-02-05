import React from 'react';
import '../App.css';
import './Home.css';
import '../Components/threed'
import { useTypewriter, Cursor } from "react-simple-typewriter";



const Home = () => {

  const [text] = useTypewriter({
    words:['REACT','HTML','CSS'],          //FOR THE TYPEWRITING EFFECT
    loop: {},
    typeSpeed:120,
    deleteSpeed:100,
});




  return (
    <div className='main'>
    <div className='page-container' style={{
      //  backgroundImage: 'url("../../public/grouphomepng.png")', // Adjust the path to match your project structure
      backgroundImage: `url(${process.env.PUBLIC_URL}/grouphomepng.png)`,
      // backgroundImage:img,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // opacity:'50%',
      minHeight: '100vh', // Set an appropriate height
      // Add other styles as needed
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