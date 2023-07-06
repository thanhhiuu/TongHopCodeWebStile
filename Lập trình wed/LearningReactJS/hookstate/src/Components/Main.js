import React from 'react';
import {useState} from "react";


function Main() {
    const [ageRe, setAgeRe] = useState(0);

    const hanlgAgee = () => {
        setAgeRe(ageRe + 1)
    }
  return (
    <div>
        <h1>{ageRe}</h1>
        <button  onClick={hanlgAgee}>Clcik</button>
    </div>
  )
}

export default Main