
import { useState } from 'react';
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
import React from "react";
//import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { Router, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
 // Link,
  Routes
} from "react-router-dom";

function App() {
  const [tgltext, setTgltext] = useState('Enable Darkmode');
  const [tgltext2, setTgltext2] = useState('Enable Redmode');
  const [tgltext3, setTgltext3] = useState('Enable Yellowmode');
  const [mode, setMode] = useState('light');
  const [mode2, setMode2] = useState('light');
  const [mode3, setMode3] = useState('light');
  const [alert, setAlert] = useState(null);

  const togglemode = ()=>{
    if (mode==='light') {
      setMode('dark');
      setTgltext('Enable Lightmode');
      document.body.style.backgroundColor = '#0a0909';
      showalert(" Dark mode has been Enabled","Success");
    } else {
       setMode('light');
       setTgltext('Enable Darkmode');
       document.body.style.backgroundColor = 'white'
       showalert(" Light mode has been Enabled","Success");
    } 
  }
  
  const togglemode2 = ()=>{
    if (mode2==='light') {
      setMode2('red');
      setTgltext2('Enable Lightmode');
      document.body.style.backgroundColor = 'red';
      showalert(" Red mode has been Enabled","Success");
    } else {
       setMode2('light');
       setTgltext2('Enable Redmode');
       document.body.style.backgroundColor = 'white'
       showalert(" Light mode has been Enabled","Success");
    } 
  }

  const togglemode3 = ()=>{
    if (mode3==='light') {
      setMode3('#ffc107');
      setTgltext3('Enable Lightmode');
      document.body.style.backgroundColor = '#ffc107';
      showalert(" Green mode has been Enabled","Success");
    } else {
       setMode3('light');
       setTgltext3('Enable Yellowmode ');
       document.body.style.backgroundColor = 'white'
       showalert(" Light mode has been Enabled","Success");
    } 
  }

  const showalert = (message,type)=>{
       setAlert({ msg: message,
       typ: type})
       setTimeout(() => {
        setAlert(null);
       }, 1000);
  }

  return (
       <>
       <Router>
       <Navbar title = "Text" about = "About" home = "Home" mode={mode} togglemode={togglemode} togglemode2={togglemode2} togglemode3={togglemode3} tgltext={tgltext} tgltext2={tgltext2} tgltext3={tgltext3}/>
       <Alert alert={alert}/>
       {/* <Navbar/> */}
       <div className="container my-3">
       <Routes>
            <Route path="/" element={<TextFrom showalert={showalert} heading="Enter the text to analyze" mode={mode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
       </div>
       </Router>
       </>  
  );
}

export default App;
