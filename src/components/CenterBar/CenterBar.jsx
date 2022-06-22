import React, { useRef, useState } from 'react';
import './CenterBar.css';

import { svg } from '../../constants/index';
import images  from '../../constants/images';




const CenterBar = () => {
    const [playVideo, setPlayVideo] = useState(false)
    const vidRef = useRef();

    const handleVideo = () => {
      setPlayVideo((prevPlayVideo) => !prevPlayVideo)
  
      if(playVideo){
        vidRef.current.pause()
      }else{
        vidRef.current.play()
      }
    }


  return (
    <>
       <div class="app__video">
     <video src={images.f_video} controls ref={vidRef} />
    </div>
    <div className='app__video-controls'>
       <div className='app__video-controls_btn'>
          <img src={svg.previous} alt="previous"  />
          <img src={svg.next} alt="nxt" />
          {
            playVideo ? 
              <img src={svg.playbtn} alt="play" onClick={handleVideo} /> :
              <img src={svg.stopbtn} alt="stop" onClick={handleVideo} />
            
          }
          
       </div>
       <div className='app__video-control_icons'>
           <img src={svg.camera} alt="camera" />
           <img src={svg.volumeup} alt="volume" />
           <img src={svg.settings} alt="arrow" />
       </div>
    </div>
    </>
 

  )
}

export default CenterBar;