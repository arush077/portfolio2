import React from 'react'
import './Socials.css'

const Socials = () => {
  return (
    
//  <div className='socials_back'
//   // Set an appropriate height
//   // Add other styles as needed
//  >

<div className='socials_page-container' style={{
  
  display:'flex',
  backgroundImage: `url(${process.env.PUBLIC_URL}/socials2.png)`,
  // backgroundImage: 'url("/socials2.png")', // Adjust the path to match your project structure
  backgroundSize: 'cover',
  
  backgroundRepeat: 'no-repeat',
  
  // opacity:'50%',
  minHeight: '100vh', // Set an appropriate height
  // Add other styles as needed
}}>



<div className='Socials_icons'>
  <div className="socials_heading">Socials</div>
<div className="socials_ul">
  <div className='socials_li'>
    <a href="https://github.com/arush077">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span className="fa fa-github"></span>
    </a>
  </div>

  <div className='socials_li'>
    <a href="https://www.linkedin.com/in/arush-shetty/">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span className="fa fa-linkedin"></span>
    </a>
  </div>

  <div className='socials_li'>
    <a href="https://www.instagram.com/arush077/">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span className="fa fa-instagram"></span>
    </a>
  </div>

  <div className='socials_li'>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span className="fa fa-whatsapp"></span>
    </a>
  </div>
</div>
</div> 
</div>  


  )
}

export default Socials