import React from 'react'
import { svg } from '../../constants/index';
import images  from '../../constants/images';
import './RightSideBar.css';

const RightSideBar = () => {
  return (
    <div class="rightbar">
       <div className='rightbar-heading'>
         <h2>Browse Music</h2>
         <img src={svg.search} alt="search" />

       </div>
      
      <div className='rightbar-highlight'>
        <div className='rightbar-highlight-img'>
        <img src={images.imgbg_green} alt="green" />
        <img src={svg.groupmusic} alt="music" className='music-bars' />
        </div>
        <div className='rightbar-highlight-text'>
          <h3 className='text'>Hight et Monalisa</h3>
          <p>7th Sound. 00:45</p>
        </div>
      <div className='rightbar-highlight-btn'>
         <a href="#use">Use</a>
      </div>
      </div>
      <div className='rightbar-scrollgroup'>
      <img src={svg.scrollgroup1} alt=""  className='scrollgroup'/>
      <div className='scrolldiv'/>
      </div>
     

    <div className='rightbar-section'>
      <div className='rightbar-section-area'>
        <img src={images.imgbg_man_blue} alt="" />
        <div>
        <h3>Dior</h3>
        <p>Rugar - 03:35</p>
        </div>
       
        <div className='rightbar-section-icon'>
          <img src={svg.arrowdown} alt="" />
        </div> 
      </div>

      <div className='rightbar-section-area'>
        <img src={images.imgbg_man_blue} alt="" />

        <div>
        <h3>Dior</h3>
        <p>Rugar - 03:35</p>
        </div>
       
        <div className='rightbar-section-icon'>
          <img src={svg.arrowdown} alt="" />
        </div> 
      </div>

      <div className='rightbar-section-area'>
        <img src={images.imgbg_man_blue} alt="" />
        <div>
        <h3>Dior</h3>
        <p>Rugar - 03:35</p>
        </div>
       
        <div className='rightbar-section-icon'>
          <img src={svg.arrowdown} alt="" />
        </div> 
      </div>


      <div className='rightbar-section-area'>
        <img src={images.imgbg_man_blue} alt="" />
        <div>
        <h3>Dior</h3>
        <p>Rugar - 03:35</p>
        </div>
       
        <div className='rightbar-section-icon'>
          <img src={svg.arrowdown} alt="" />
        </div> 
      </div>
    </div>

  </div>
  )
}

export default RightSideBar