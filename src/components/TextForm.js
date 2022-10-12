import React, { useState } from 'react'


export default function TextForm(props) {
    const handelUpClick = () => {
        console.log("upper case was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to UpperCase","success")
    }
    const handelLowClick =()=>{
          console.log("Lower cas was clicked:"+text)
        let newText= (text.toLowerCase())
        setText(newText)
        props.showAlert("converted to LowerCase","success")

    }
    const handelOnChange = (event) => {
        setText(event.target.value)
    }
    const handelClearClick=()=>{
        console.log("clear all"+text)
        setText("")
        props.showAlert("Text cleared","success")
        
    }

    const [text, setText] = useState('')
    
    return (
        <>
            <div className="container" style={{color: 'dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode === 'dark'?'gray': 'white',color:props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handelUpClick}> Convert to UpperCase </button>
                <button className="btn btn-primary mx-1" onClick={handelLowClick}> Convert to LowerCase </button>
                <button className="btn btn-primary mx-1"onClick={handelClearClick}> Clear</button>
            </div>
            <div className="container my-3" style={{color:props.mode=== 'dark'?'white':'#042743'}}> 
           
                <h1>your text summery</h1>
                <p>{text.split(" ").length} words and {text.length}  character</p>
                <p>{0.008 * text.split(" ").length}Minuts read</p>
                <h2>Preview</h2>
               <p>{text.length>0 ? text : "Enter somthing in the textbox above to preview it here" }</p> 
               
            </div>
        </>
    )
}


// All comments/ short nots  is hear for this fiel 

//   my-2  meaning ----> 

{/* yaha my-3 ka matlab m=margin  and y = y-axis matlab y-axis mai margin de ja rahi h  */}
 

//  this comment  in your text summary plzz analyse your text summery --->

  {/* yaha split text mai jo word h unko split kr rha h or braket mai collen laga k soace isleye deya h ke yaha space aa jayega aur length sai hme number of words ke length pta chal jayege */}


//   mx-1 meaning --->

// yaha mx-1 ka matlab h ke x-axis mai margin 

// analyse line no.20 --->

// text = "new text"; //wrong way to change the state
    // setText("new text"); //wrong way to change the state
