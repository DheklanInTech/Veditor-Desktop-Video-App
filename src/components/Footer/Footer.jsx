import React from 'react'
import { svg } from '../../constants/index';
import images  from '../../constants/images';
import './Footer.css';

const Footer = () => {

  const lines = [ <div className='lines-1'/>,
  <div className='lines-2'/>,
  <div className='lines-3'/>,
  <div className='lines-4' />,
  <div className='lines-5'/>,
  <div className='lines-6'/>,
  <div className='lines-7'/>,
  <div className='lines-8'/>,
  <div className='lines-9' />,
  <div className='lines-10'/>,
  <div className='lines-11'/>,
  <div className='lines-12'/>,
  <div className='lines-13' />,
  <div className='lines-14'/>,
  <div className='lines-15'/>,
  <div className='lines-16'/>,
  <div className='lines-17'/>,
  <div className='lines-18' />,
  <div className='lines-19'/>,
  <div className='lines-20'/>,
  <div className='lines-21'/>,
  <div className='lines-22' />,
  <div className='lines-23'/>,
  <div className='lines-24'/>,
  <div className='lines-25'/>,
  <div className='lines-26'/>,
  <div className='lines-27' />,
  <div className='lines-28'/>,
  <div className='lines-29'/>,
  <div className='lines-30'/>,
  <div className='lines-31' />,
  <div className='lines-32'/>,
  <div className='lines-33'/>,
  <div className='lines-34'/>,
  <div className='lines-35'/>,
  <div className='lines-36' />,
  <div className='lines-37'/>,
  <div className='lines-38'/>,
  <div className='lines-39'/>,
  <div className='lines-40' />,
  <div className='lines-41'/>,
  <div className='lines-42'/>,
  <div className='lines-43'/>,
  <div className='lines-44'/>,
  <div className='lines-45' />,
  <div className='lines-46'/>,
  <div className='lines-47'/>,
  <div className='lines-48'/>,
  <div className='lines-49' />,
  <div className='lines-50'/>,
  <div className='lines-51'/>,
  <div className='lines-52'/>,
  <div className='lines-53'/>,
  <div className='lines-54' />,
  <div className='lines-55'/>,
  <div className='lines-56'/>,
  <div className='lines-57'/>,
  <div className='lines-58'/>,
  <div className='lines-59'/>,
  <div className='lines-60' />,
  <div className='lines-61'/>,
  <div className='lines-62'/>,
  <div className='lines-63'/>,
  <div className='lines-64' />,
  <div className='lines-65'/>,
  <div className='lines-66'/>,
  <div className='lines-67'/>,
  <div className='lines-68'/>,
  <div className='lines-69'/>,
  <div className='lines-70' />,
  <div className='lines-71'/>,
  <div className='lines-72'/>,
  <div className='lines-73'/>,
  <div className='lines-74' />,
  <div className='lines-75'/>,
  <div className='lines-76'/>,
  <div className='lines-77'/>,
  <div className='lines-78'/>,
  <div className='lines-79'/>,
  <div className='lines-80' />,
  <div className='lines-81'/>,
  <div className='lines-82'/>,
  <div className='lines-83'/>,
  <div className='lines-84' />,
  <div className='lines-85'/>,
  <div className='lines-86'/>,
  <div className='lines-87'/>,
  <div className='lines-88'/>,
  <div className='lines-89'/>,
  <div className='lines-90' />,
  

]
  return (
    <div className='footer'>
       <div className='footer-section'>
            <div className='footer-section-1'>
              <div className='footer-icons'>
                 <img src={svg.block} alt="" />
                 <img src={svg.settings} alt="" />
              </div>
              <div className='footer-icons second'>
                  <img src={svg.camera} alt="" />
                 <img src={svg.show} alt="" />

              </div>
              <div className='footer-icons third'>
                 <img src={svg.musicicon} alt="" />
                 <img src={svg.show} alt="" />
             </div>
             <div className='footer-icons'>
                 
             </div>
            </div>
            <div className='footer-section-2'>
              <div className='timers'>
                  <p>00.00.00</p>
                  <p>00.05.00</p>
                  <p>00.10.00</p>
                  <p>00.15.00</p>
                  <p>00.20.00</p>
                  <p>00.25.00</p>
                  <p>00.30.00</p>
                  <p>00.35.00</p>
                  <p>00.45.00</p>
                  <p>00.50.00</p>
                  <p>00.55.00</p>
                  <p>00.60.00</p>
                  <p>00.65.00</p>
              </div>
              <div className='barlines'>
                  <div className='lines-container'>
                     {lines.map((line,i)=> (line)) }
                   </div>
                  
              </div>
               <div className='footer-bar'>
                <div className='footer-bar-color'>
                <img src={images.imgbg_girl_black} alt="" />
                <div/>
              </div>

              </div>
              <div className='footer-bar-image'>
                <img src={svg.rectangle} alt=""  />
                <img src={svg.grouprec} alt="" className='image'/>
              </div>
            </div>
            

       </div>
    </div>
  )
}

export default Footer