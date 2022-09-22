import React, { useState } from 'react'
import Textbox from './components/Textbox';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

export default function App() {
  const [mode, setMode]=useState('light');
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#0a2640'
      document.title='Text Utills - Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor ='white'
      document.title='Text Utills - Light Mode'
    }
  }
  
  return (
  <>
  {/* <Router> */}
    <Navbar heading="TextUtils" home="Home" toogle={toggleMode} mode={mode}/>
   
    <div className='container my-4'>
    {/* <Routes>
          <Route exact path="/about" element={<AboutUs/>}> */}
          {/* <AboutUs /> */}
          {/* </Route>
         
          <Route exact path="/" element={<Textbox mode={mode} toogle={toggleMode}/>}> */}
          <Textbox mode={mode} toogle={toggleMode}/>
           
          {/* </Route>
        </Routes> */}
    
        
    
        
    </div>
    {/* </Router> */}
   
    </>
  );
}


