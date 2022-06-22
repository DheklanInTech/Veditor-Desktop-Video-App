import React from 'react'
import CenterBar from '../CenterBar/CenterBar'
import CenterTab from '../CenterBar/CenterTab';
import LeftSideBar from '../LeftSideBar/LeftSideBar'
import RightSideBar from '../RightSideBar/RightSideBar';
import './MainMenu.css'

const MainMenu = () => {
  return (
    <div className='main__menu'>
      <div className='menu left__menu'>
        <LeftSideBar/>
         
      </div>
      <div className='menu center__menu'>
        <CenterBar/>
         
      </div>
      
      <div className='menu right__menu'>
        <RightSideBar/>
          
      </div>
    </div>
  )
}

export default MainMenu