import React from 'react'
import "./Projects.css"
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Projects_Head() {
    const [text] = useTypewriter({
        words:['Developer','Designer','GG'],          //FOR THE TYPEWRITING EFFECT
        loop: {},
    });



  return (
    <div>
        <div className='page-container' style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/project05.png)`,
      // backgroundImage: 'url("/project05.png")', // Adjust the path to match your project structure
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      // opacity:'50%',
      minHeight: '100vh', // Set an appropriate height
      // Add other styles as needed
    }}>


    <div className="Projects_Head_typetext">
    {text}
    </div>
    






        
    </div>
      
    </div>
  )
}

export default Projects_Head
