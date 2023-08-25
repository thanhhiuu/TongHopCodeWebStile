import React, { useState, useContext} from 'react'
import {Countcontent} from "../App"

function News() {
    const NewCout = React.createContext();
    const {count} = useContext(Countcontent);
    const {setCount} = useContext(Countcontent);
    const [News, setNewCout] = useState("");
  return (
    <div>
        <h3>{count}</h3>
        <h2>{News}</h2>
        
        <NewCout.Provider value={News}>
            <div>
                <input type="text" onChange={(event) => {setNewCout(event.target.value)}} />
                <button onClick={() => {setCount(News)}}>Addd</button>
            </div>
        </NewCout.Provider>
    </div>
  )
}

export default News
