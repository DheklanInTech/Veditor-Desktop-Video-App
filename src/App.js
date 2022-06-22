import React,{useState,useEffect} from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import MainMenu from './components/MainMenu/MainMenu'
import Navbar from './components/Navbar/Navbar';
import Blank from './Blank';

const App = () => {
 
  
  return (
    <div>
      { window.innerWidth < 1000 ? <Blank/> :(
        <div>
          <Navbar/>
       <MainMenu/>
       <Footer/>
        </div>
     
      )
      }
     
    </div>
  )
}

export default App