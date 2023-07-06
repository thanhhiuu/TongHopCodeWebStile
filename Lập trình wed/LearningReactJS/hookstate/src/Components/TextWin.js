import React, { useState } from 'react'

function TextWin() {
    const [text, setText] = useState("");

    const changeText = (event) => {
        setText(event.target.value)
    }
  return (
    <div style={{marginTop: "20px"}}>
        <input type="text" onChange={changeText} />
        <h1>{text}</h1>
    </div>
  )
}

export default TextWin