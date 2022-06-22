import React from 'react'
import { svg } from '../../constants/index';
import images  from '../../constants/images';
import './Navbar.css'


const Navbar = () => {


  return (
   <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={svg.menubar} alt="" />
        <img src={svg.logo} alt="" />
      </div>
      <ul className='app__navbar-links'>
         <li className='p__opensans'>
           <p> <img src={svg.videoedit} alt="joyman" /></p> 
           <a href="#Home">Video Editing</a> 
         </li>
         <li className='p__opensans'>
           <p><img src={svg.importvideo} alt="import" /> </p>
           <a href="#Home"> </a> 
         </li>
         <li className='p__opensans'>
           <p><img src={svg.voiceover} alt="voice" /> </p>
           <a href="#Home">Add Voiceover</a> 
         </li>
         <li className='p__opensans'>
           <p><img src={svg.mask} alt="filters" /></p>
           <a href="#Home">Filters/Effects</a> 
         </li>
         <li className='p__opensans'>
           <p><img src={svg.clipvideo} alt="subtitle" /></p>
           <a href="#Home">Add Subtitle</a> 
         </li>
         <li className='p__opensans'>
           <p><img src={svg.Dglass} alt="preview" /></p>
           <a href="#Home">3D Preview</a> 
         </li>
         <li className='p__opensans'>
           <p><img src={svg.speaker} alt="speaker" /></p>
           <a href="#Home">Sound Engine</a> 
         </li>
      </ul>
      <div className='app__navbar-user'>
          <img src={images.joy_man} alt="" />
      </div>
   </nav>
  )
}

export default Navbar