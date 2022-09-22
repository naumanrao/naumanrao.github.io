import { useState } from "react";
import React from 'react';
import '../App.css'



export default function Textbox(props) {
    const handlerToUpperCase=()=>{
let newText=text.toUpperCase();
setText(newText)
    }
    const handlerToLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText)
            }
            const handlerToClear=()=>{
        let newText=''
                setText(newText)
                    }
    const handleOnChange=(event)=>{
setText(event.target.value);
    }
    const handlerToReverse=()=>{
        // let newText=text.split(' ').reverse().join(' ');
  
       setText(text.split(' ').reverse().join(' '))
        
            }
            const handlerToDashes=()=>{
              let newText=text.split(' ').join('-');
        
             setText(newText)
              
                  }
                  const handlerToCopy=()=> {
                    // Get the text field
                    let copyText = document.getElementById("textbox");
                  
                    // Select the text field
                    copyText.select();
                    
                  
                    
                    navigator.clipboard.writeText(copyText.value);
                  
                    // Alert the copied text
                    alert("Copied the text: " + copyText.value);
                  }
    const [text , setText] = useState("");

  return (
   
    // const onClickHandler = ()=>{

    // }
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Put your text below in the box:</h1>
<div className="mb-3">
  
  <textarea className="form-control mb-4" id="textbox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#8da5bd':'white' , color: props.mode==='dark'?'white':'black'}}rows="10"></textarea>
  <button type="button" className="btn btn-primary mx-2"  onClick={handlerToUpperCase}>Click to Uppercase</button>
  <button type="button" className="btn btn-primary mx-2"onClick={handlerToLowerCase}>Click to Lowercase</button>
  <button type="button" className="btn btn-primary mx-2"onClick={handlerToClear}>Clear Text</button>
  <button type="button" className="btn btn-primary mx-2"  onClick={handlerToReverse}>Click to Reverse</button>
  <button type="button" className="btn btn-primary mx-2 " onClick={handlerToDashes}>Add Dashes</button>
  <button type="button" className="btn btn-primary mx-2 " onClick={handlerToCopy}>Copy Text</button>


</div>
<div className='container'>
    <h2>Your text Summary:</h2>
    <p>Your text has words {text.split(' ').length} and {text.length} characters.</p>
    <h3>Preview</h3>
    <p>{text.length>0?text: "Write something in the box to preview it here :)"}</p>
    </div>
    </div>
  )
}
