import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("LowerCase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  // added the speak functionality in the TextUtilities app and function is:
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Done!","success");
  };
  // It is targetted by the button 'speak':

  // This is a function to make every first letter of word in capital

  const capitalFirstLetter = () => {
    let words = text.split(" ");
    let uppercaseword = " ";
    words.forEach((element) => {
      uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " ";
    });
    setText(uppercaseword);
    props.showAlert("First letter is capitalized!","success");
  };

  const handleCopy = () =>{
    // var text = document.getElementById("myBox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Cleared!","success");
  };

  const [text, setText] = useState("");
  //text="new text"; //Wrong way to change the state
  //setText=("new text"); //Correct way to change the state
  return (
    <>
      <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white',
        color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">
          Speak
        </button>
        <button disabled={text.length===0} type="submit" onClick={capitalFirstLetter} className="btn btn-warning mx-2 my-2">
          Capitalize First Letter
        </button>
        <button disabled={text.length===0} type="submit" onClick={handleCopy} className="btn btn-warning mx-2 my-2">
          Copy Text
        </button>
        <button disabled={text.length===0} type="submit" onClick={handleClearClick} className="btn btn-danger mx-2 my-2">
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  );
}
