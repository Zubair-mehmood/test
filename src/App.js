
import { useState } from 'react';
import './App.css';
 //import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/Alert';
import React from "react"
// import {
//   BrowserRouter as Router,
//   Route,
//  // Link,
//   Routes
// } from "react-router-dom";

function App() {
  const [tgltext, setTgltext] = useState('Enable Darkmode');
  const [mode, setMode] = useState('light');
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
  

  const showalert = (message,type)=>{
       setAlert({ msg: message,
       typ: type})
       setTimeout(() => {
        setAlert(null);
       }, 1000);
  }

  return (
       <>
       {/* <Router> */}
       <Navbar title = "Text" about = "About" home = "Home" mode={mode} togglemode={togglemode}  tgltext={tgltext} />
       <Alert alert={alert}/>
       {/* <Navbar/> */}
       <div className="container my-3">
       {/* <Routes>
            <Route path="/" element={<TextFrom showalert={showalert} heading="Enter the text to analyze" mode={mode} />} />
            <Route path="/about" element={<About />} />
          </Routes> */}
      <TextFrom showalert={showalert} heading="Enter the text to analyze" mode={mode} />
       </div>
       {/* </Router> */}
       </>  
  );
}

export default App;
