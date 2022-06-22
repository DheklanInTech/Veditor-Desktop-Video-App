import React from 'react'
import './LeftBar.css';
import { svg } from '../../constants/index';
import images  from '../../constants/images';

const LeftSideBar = () => {
  return (
    <div class="leftbar">
       <h3>Guides</h3>
       <p>learn all you need to know to get started on veditor</p>
          <div className='edit'>
            <div className='edit__img'>
                <img src={images.snow_bg} alt="snowbg" />
                <img src={svg.iconplay} alt="" className='iconplay' />
            </div>
            <div className='edit__content'>
            <h4>How to edit your first veditor video</h4>
            <p>1:00</p>
            </div>
           
          </div>

          <div className='edit'>
            <div className='edit__img'>
                <img src={images.snow_bg} alt="snowbg" />
                <img src={svg.iconplay} alt="" className='iconplay' />
            </div>
            <div className='edit__content'>
            <h4>How to edit your first veditor video</h4>
            <p>1:00</p>
            </div>
           
          </div>
          <div className='edit'>
            <div className='edit__img'>
                <img src={images.snow_bg} alt="snowbg" />
                <img src={svg.iconplay} alt="" className='iconplay' />
            </div>
            <div className='edit__content'>
            <h4>How to edit your first veditor video</h4>
            <p>1:00</p>
            </div>
           
          </div>

          <a href="#h">See More</a>
       </div>
  
  )
}

export default LeftSideBar