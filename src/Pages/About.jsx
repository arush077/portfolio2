import React from 'react'
import './About.css'


const About = () => {
  return (
    <div div className='back' style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/groupabout.png)`,
      // backgroundColor:'black',
      // backgroundImage: 'url("/groupabout.png")', // Adjust the path to match your project structure
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // opacity:'50%',
      minHeight: '100vh', // Set an appropriate height
      // Add other styles as needed
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