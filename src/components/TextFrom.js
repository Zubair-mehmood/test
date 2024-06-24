
import React, { useState} from 'react'

export default function TextFrom(props) {
  const  handleUpclick =()=>{
   // console.log("Uppercase was click" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Convert to Uppercase","Success");
}
const  handleLoclick =()=>{
 // console.log("Uppercase was click" + text);
  let newtext = text.toLowerCase();
  setText(newtext);
  props.showalert("Convert to Lowercase","Success");
}
const  handleclearclick =()=>{
 // console.log("Uppercase was click" + text);
  let newtext = '';
  setText(newtext);
  props.showalert("Clear Text","Success");
}
const  handlerepeatclick =()=>{
  // console.log("Uppercase was click" + text);
   let newtext = text+text;
   setText(newtext);
   props.showalert("Repeat Text","Success");
 }
 
const  handleonchange =(event)=>{
    console.log("On Change");
    setText(event.target.value);
}
const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#0a0909'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==='dark'?'#0a0909':'white',color: props.mode==='dark'?'white':'#0a0909'}} id="Box" rows="14"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearclick}>Clear test</button>
        <button className="btn btn-primary mx-2" onClick={handlerepeatclick}>Repeat text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#0a0909'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").filter(Element=>Element.length !==0).length} Word and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter(Element=>Element.length !==0).length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
