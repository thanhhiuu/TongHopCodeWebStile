import React, { useState } from 'react'

function Hidden() {
    const [hidden, setHidden] = useState(true);
    
  return (
    <div>
        <button onClick={() => {setHidden(!hidden)}}>An/Hien</button>
        {hidden === true && <h1>Xin chao cac ban</h1>}
    </div>
  )
}

export default Hidden